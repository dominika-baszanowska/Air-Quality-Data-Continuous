# Implementation

## Introduction
**System Version:** The current version of the system is  v1.0-alpha.

**Dataset:** The dataset used is called Air Quality Data Continuous. It was published on the Open Data Bristol website by the Sustainability Team.  Broadly speaking the dataset contains measurements of different types of pollutants across areas of Bristol during different times of day.

**Issues:** Since the dataset also contains historic measurements from as far as 1993, it became highly complex to download more than 1 million records. Downloading records from one year also proved complex, as such it was agreed with Steve to download records from a particular month (March) from a given year (2021) and then upload it to the schema ISD on MySQL. 

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

C:\Users\hoyos\Documents\GitHub\Air-Quality-Data-Continuous\main.js
    1:17  error  'require' is not defined            no-undef
    2:15  error  'require' is not defined            no-undef
    3:14  error  'require' is not defined            no-undef
    4:1   error  'process' is not defined            no-undef
    4:22  error  'process' is not defined            no-undef
   25:55  error  'fields' is defined but never used  no-unused-vars
   34:81  error  'fields' is defined but never used  no-unused-vars
   54:82  error  'fields' is defined but never used  no-unused-vars
   66:55  error  'fields' is defined but never used  no-unused-vars
   75:81  error  'fields' is defined but never used  no-unused-vars
   88:55  error  'fields' is defined but never used  no-unused-vars
   97:81  error  'fields' is defined but never used  no-unused-vars
  111:46  error  'process' is not defined            no-undef
  126:4   error  Mixed spaces and tabs               no-mixed-spaces-and-tabs
  130:5   error  'process' is not defined            no-undef
  131:22  error  'process' is not defined            no-undef
  132:46  error  'process' is not defined            no-undef
  136:1   error  'exports' is not defined            no-undef
  137:1   error  'exports' is not defined            no-undef
  138:1   error  'exports' is not defined            no-undef

✖ 20 problems (20 errors, 0 warnings)


## Software Architecture
TODO: Describe the major components of your architecture. Are any particular architectural styles being used?

![Insert your component Diagram here](images/component.png)
