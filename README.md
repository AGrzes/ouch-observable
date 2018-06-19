# Ouch Rx [![Build Status](https://travis-ci.org/AGrzes/ouch-rx.svg?branch=master)](https://travis-ci.org/AGrzes/ouch-rx) [![Coverage Status](https://coveralls.io/repos/github/AGrzes/ouch-rx/badge.svg?branch=master)](https://coveralls.io/github/AGrzes/ouch-rx?branch=master)
Library wrapping [PouchDB](https://pouchdb.com/) with [rxjs](https://rxjs-dev.firebaseapp.com/) observables.

## Usage
To use Ouch Rx one have to wrap database object with Ouch instance and then use its methods to create Observables and Observers.

    const {Ouch} = require('ouch-rx');
    var ouch = new Ouch(db);
    ouch.all().pipe(transform).subscribe(ouch.sink())

## Reference
### Constructor
Wraps single pouchdb database.

    new Ouch(db)

|Argument| Description|
|---|---|
| db | A PouchDB database |

### Methods
#### all
Returns observable of all documents.

    ouch.all(options)

|Argument| Description|
|---|---|
| options | An options object passed to db.all_docs. The following fields are not passed: `include_docs` |

#### view
Returns observable of view results.

    ouch.view(name,options)

|Argument| Description|
|---|---|
| name | A view name |
| options | An options object passed to db.query. The following fields are not passed: `include_docs` |

To use this method the db object must support query method.

#### sink
Returns observer that writes incoming objects into db. 

The operation will fail on any error so it is useful for inserting completely new documents and for updating documents previously fetched from db (so current `_rev` is known). 

    ouch.sink()

#### merge
Returns observer that writes incoming objects into db. 

The operation will call the merge function with incoming object to prepare document to store. The operation will call the merge function again with incoming object and current document state if conflict is encountered. It will then retry write with the result of merge function.

    ouch.merge(mergeFunction)    

|Argument| Description|
|---|---|
| mergeFunction | A merge function `(object,current) => document to store`  |
