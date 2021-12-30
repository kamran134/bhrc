import { IOrgDoc } from "../../models";

export interface IOrgDocsState {
    orgDocs: IOrgDoc[];
    orgDoc?: IOrgDoc;
}