import {Command, Flags} from "@oclif/core";
import {execaCommand, fs} from "../lib";
import {
  pkgListValidator,
  pkgValidator,
  type Pkg,
  type PkgList,
  type PkgListRecord,
  type PkgRecord,
} from "../validators/package";

export default class FreezePkgCommand extends Command {
  static override description = "Freeze dependencies in `package.json`.";

  static override flags = {
    file: Flags.string({
      char: "f",
      required: true,
      default: "package.json",
    }),
    pkgManager: Flags.string({
      required: true,
      default: "pnpm",
    }),
  };

  async run(): Promise<void> {
    const {flags} = await this.parse(FreezePkgCommand);
    const pkgRaw = JSON.parse(String(fs.readFileSync(flags.file)));
    const pkg = pkgValidator.parse(pkgRaw);

    const listExec = await execaCommand(
      [flags.pkgManager, "list --depth 0 --json"].join(" "),
    );
    const pkgList = pkgListValidator
      .array()
      .parse(JSON.parse(listExec.stdout))[0];

    this.tryAssign(pkgRaw, flags.pkgManager, pkg, pkgList, "dependencies");
    this.tryAssign(pkgRaw, flags.pkgManager, pkg, pkgList, "devDependencies");

    fs.writeFileSync(flags.file, JSON.stringify(pkgRaw, null, 2));
    this.log("Successfully freezes package.json!");
  }

  private tryAssign(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    pkgRaw: any,
    pkgManager: string,
    pkg: Pkg,
    pkgList: PkgList,
    key: keyof Pkg & keyof PkgList,
  ): void {
    const pkgRecord = pkg[key];
    const pkgListRecord = pkgList[key];
    if (pkgRecord) {
      if (pkgListRecord) {
        this.assign(pkgRecord, pkgListRecord);
        pkgRaw[key] = pkgRecord;
      } else {
        this.warn(
          `Record "${key}" was not found "${pkgManager}" list. Skipping...`,
        );
      }
    }
  }

  private assign(pkgRecord: PkgRecord, pkgListRecord: PkgListRecord): void {
    for (const [key, value] of Object.entries(pkgListRecord)) {
      if (!(key in pkgRecord)) {
        this.warn(
          `Somehow "${key}" is not found on package.json but found on list. Skipping...`,
        );
        continue;
      }
      pkgRecord[key] = value.version;
    }
  }
}
