
import * as PouchDB from 'pouchdb-mapreduce'
import { Observable, OperatorFunction } from 'rxjs'

export type MergeFunction<Model,Content> = (newDoc: Model & Content, oldDoc?: Model & Content & { _rev: string}) => Model & Content

export declare class Ouch<Content> {
  constructor(db: PouchDB.Database<Content>)
  public sink<Model>(): OperatorFunction<Model & Content,any>
  public merge<Model>(mergeFunction: MergeFunction<Model,Content>): OperatorFunction<Model & Content,any>
  public all<Model>(options?: PouchDB.Core.AllDocsWithKeyOptions | PouchDB.Core.AllDocsWithKeysOptions |
    PouchDB.Core.AllDocsWithinRangeOptions | PouchDB.Core.AllDocsOptions): Observable<Model & Content>
  public changes<Model>(options?: PouchDB.Core.ChangesOptions): Observable<Model & Content>
  public view<Model,Result>(name: string, options?: PouchDB.Query.Options<Content,Result>): Observable<Model & Content>
}

export const override: MergeFunction<any,any>
export const skip: MergeFunction<any,any>
export const assign: MergeFunction<any,any>
