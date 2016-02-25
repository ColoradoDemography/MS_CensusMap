# MS_CensusMap
NodeJS microservice suite for CensusAPI Map (replaces former PHP scripts)

Group of micro-services specific to CensusAPI Map functionality

#### advsearch.js

**Description:**
Advanced Query functionality.  Returns list of geonums.

**Parameters:**

 - advsumlev
 - advstate
 - advsign
 - advtext
 - advtable
 - advnumerator
 - advdenominator

#### chartpost.js

**Description:**
Multi-Geo Chart functionality.  Returns a(n) {geo,result,moe} object(s)

**Parameters:**

 - geonum
 - table
 - numerator
 - denominator

#### demogpost.js

**Description:**
For retrieving table data triggered by an Advanced Query.  Called via POST with a list of geonums (advsearch.js)

**Parameters:**

 - field
 - state
 - county
 - geonum
 - geoid
 - sumlev
 - table
 - type
 - db
 - schema
 - geo
 - series
 - limit
 - moe

#### getCSV.js

**Description:**
A CSV returning POST service.

**Parameters:**

 - csv\_text
 - filename

#### getranges.js

**Description:**
Get Ranges functionality.  Return data assists in calculating class breaks.

**Parameters:**

 - geo
 - num
 - denom
 - discard

#### simple.js

**Description:**
Queries data for use in single-area charts.  Typically called twice; once for values, once for moe's.

**Parameters:**

 - db
 - schema
 - table
 - geonum

### Specific for testing POST requests

**postrequest.js**
