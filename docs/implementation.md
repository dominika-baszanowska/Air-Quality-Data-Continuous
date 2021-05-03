# Implementation

## Introduction
**System Version:** The current version of the system is v1.0

**Dataset:** The dataset used is called Air Quality Data Continuous, it was published on the Open Data Bristol website by the Sustainability Team.  Broadly speaking the dataset contains measurements on pollution across different areas of Bristol during different times of day.

**Issues:** Since the dataset also contains historic measurements from as far as 1993, it became highly complex to download more than 1 million records, even downloading records from one year also proved complex, as such it was agreed with Steve to download records from a particular month (March) from a given year (2021) and then upload it to the schema ISD on MySQL. 

**Configuration data:** MySQL created a sys schema that works as configuration data.

## Project Structure

```
├── conf.json // JavaScript Object Notation - Used for configuration data
├── dbconnect // It enables a connection to MySQL
├── e2e // This enables maintainers to test the application flow by simulating a real user scenario
├── main.js // Provides our project with a logic. E.g. it contains queries to the server. 
├── node_modules // It contains every installed dependency for the project
├── package-lock.json
├── package.json // Used for managing the project's dependencies
├── static
├── test
└── views
```

directory: 6 file: 4


| **Module**        | **Warnings** | **Error** |
| -------------------------------------- | ------------------- | ------------------- |
| **Packaje.json** | 0 warnings| 1 Error |
| **Conf** | 0 warnings| 1 Error |
| **Main** | 0 warnings| 16 Errors |


## Software Architecture
TODO: Describe the major components of your architecture. Are any particular architectural styles being used?

![Insert your component Diagram here](images/component.png)
