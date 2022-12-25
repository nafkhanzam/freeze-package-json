import {zod} from "../lib";

const pkgRecordValidator = zod.record(zod.string());
export type PkgRecord = zod.infer<typeof pkgRecordValidator>;
export const pkgValidator = zod.object({
  dependencies: pkgRecordValidator.optional(),
  devDependencies: pkgRecordValidator.optional(),
});
export type Pkg = zod.infer<typeof pkgValidator>;

const pkgListRecordValidator = zod.record(
  zod.object({
    version: zod.string(),
  }),
);
export type PkgListRecord = zod.infer<typeof pkgListRecordValidator>;
export const pkgListValidator = zod.object({
  dependencies: pkgListRecordValidator.optional(),
  devDependencies: pkgListRecordValidator.optional(),
});
export type PkgList = zod.infer<typeof pkgListValidator>;
