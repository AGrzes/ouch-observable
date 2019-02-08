
import * as PouchDB from 'pouchdb-mapreduce'
import { Observable, OperatorFunction } from 'rxjs'

export type MergeFunction<Model,Content> = (newDoc: Model & Content, oldDoc?: Model & Content & { _rev: string}) => Model & Content

export declare class Ouch<Content> {
  constructor(db: PouchDB.Database<Content>)
  public sink<Model>(): OperatorFunction<Model & Content,any>
  public merge<Model>(mergeFunction: MergeFunction<Model,Content>): OperatorFunction<Model & Content,PouchDB.Core.ExistingDocument<Model & Content>>
  public all<Model>(options?: PouchDB.Core.AllDocsWithKeyOptions | PouchDB.Core.AllDocsWithKeysOptions |
    PouchDB.Core.AllDocsWithinRangeOptions | PouchDB.Core.AllDocsOptions): Observable<PouchDB.Core.ExistingDocument<Model & Content>>
  public changes<Model>(options?: PouchDB.Core.ChangesOptions): Observable<PouchDB.Core.ChangesResponseChange<Model & Content>>
  public view<Model,Result>(name: string, options?: PouchDB.Query.Options<Content,Result>): Observable<Model & Content>
}

export const override: MergeFunction<any,any>
export const skip: MergeFunction<any,any>
export const assign: MergeFunction<any,any>
export function sink<Model, Content>(db: PouchDB.Database<Content>): OperatorFunction<Model & Content,any>
export function merge<Model, Content>(db: PouchDB.Database<Content>, mergeFunction: MergeFunction<Model,Content>): OperatorFunction<Model & Content,PouchDB.Core.ExistingDocument<Model & Content>>
export function all<Model, Content>(db: PouchDB.Database<Content>, options?: PouchDB.Core.AllDocsWithKeyOptions | PouchDB.Core.AllDocsWithKeysOptions |
  PouchDB.Core.AllDocsWithinRangeOptions | PouchDB.Core.AllDocsOptions): Observable<PouchDB.Core.ExistingDocument<Model & Content>>
export function changes<Model, Content>(db: PouchDB.Database<Content>, options?: PouchDB.Core.ChangesOptions): Observable<PouchDB.Core.ChangesResponseChange<Model & Content>>
export function view<Model, Content, Result>(db: PouchDB.Database<Content>, name: string, options?: PouchDB.Query.Options<Content,Result>): Observable<Model & Content>
