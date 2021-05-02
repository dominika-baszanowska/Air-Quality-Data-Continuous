# Implementation

## Introduction
**System Version:** The current version of the system is v1.0

**Dataset:** The dataset used is called Air Quality Data Continuous, it was published on the Open Data Bristol website by the Sustainability Team.  Broadly speaking the dataset contains measurements on pollution accross differents areas of Bristol during different times of day.

**Issues:** Since the dataset also contains historic measurements from as far as 1993, it became higly complex to download more than 1 million records, even downloading records from one year also proved complex, as such it was agreed with Steve to download records from a particular month (March) from a given year (2021) and then upload it to the schema on MySQL. 

**Configuration data:** MySQL created a sys schema that works as configuration data.

## Project Structure

```
├── conf.json
├── dbconnect
├── e2e
├── main.js
├── node_modules
├── package-lock.json
├── package.json
├── static
├── test
└── views
```

directory: 6 file: 4

TODO: Provide an outline of the project folder structure and the role of each file within it (not the contents of node_modules).
provide a table listing the number of jslint warnings/reports for each module.

## Software Architecture
TODO: Describe the major components of your architecture. Are any particular architectural styles being used?

![Insert your component Diagram here](images/component.png)
