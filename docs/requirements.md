# Requirements

## User Needs

### Actors

**Healthy Citizen:**
1. People exercising outdoors, such as runners, cyclists, or walkers. 
2. People with health conditions that rely on quality air to live a healthy life, such as those suffering from asthma.
3. Council officials who monitor air pollution levels to prevent harmful spikes.

**Maintainer** who takes care of the app, fixes problems and develops new features. 

### User stories

1. As a Bristol health official I want to see the pollution records from March, so that I can study the effects of the national lockdown on air pollution. 
2. As a person with asthma I want to find the most polluted locations in Bristol, so that I can prevent those areas, and my life is not in danger while walking outdoors.
3. As a runner I want to find the less polluted locations in Bristol, so that I can breathe quality air while doing exercise outdoors.

### Use Cases

| UC1        | See all pollution records from March | 
| -------------------------------------- | ------------------- |
| **Description** | As my job being advising the Bristol Council on air pollution I want to understand what effect had less traffic as conscequence of the national lockdown on air pollution. To do this I want to be able to see all the records on air pollution from March.|
| **Actors** | Healthy Citizens.|
| **Assumptions** | <ul> Assume user understands how pollution particles are measured.</ul><ul> Assume that the user is located within Bristol. </ul>|
| **Steps** | <ol> <li> *Open Historic Pollution Data*.</li><li>Click on *See all pollution records from March* on the nav section .</li><li>Show the results to the user.</li><li>To narrow down the search send location string by clicking location buttons on the header.</li><li>Show the results to the user.</li></ol>|
| **Variations** |  |
| **Non-functional** |  |
| **Issues** | Measurements from specific locations may not be available. |


| UC2        | Find locations with high pollution levels | 
| -------------------------------------- | ------------------- |
| **Description** | As a long asthma sufferer I would like to know which areas are most polluted, as it allows me to plan future journeys whilst preventing my condition to deteriorate. To do this I want to see a list that shows me Nitrogen Dioxide (NO2) pollution records that are higher or equal to 100µg/m3 , and matched against their location and time.  |
| **Actors** | Healthy Citizens. |
| **Assumptions** | <ul> Assume user understands how pollution particles are measured.</ul><ul> Assume that the user is located within Bristol. </ul> |
| **Steps** | <ol><li> *Open Historic Pollution Data*.</li><li>Click on *Find locations with high pollution levels* on the nav section .</li><li>Show the results to the user.</li><li>To narrow down the search send location string by clicking location buttons on the header.</li><li>Show the results to the user.</li></ol>|
| **Variations** |  |
| **Non-functional** |  |
| **Issues** |  |


| UC3       | Find locations with low pollution levels| 
| -------------------------------------- | ------------------- |
| **Description** | As a person exercising outdoors, I want to be able to find the less polluted locations, and times to improve my performance. To do this I want to see a list that shows me Nitrogen Dioxide (NO2) pollution records that are lower or equal to 8.0µg/m3 , and matched against their location and time.  |
| **Actors** | Healthy Citizens. |
| **Assumptions** | <ul> Assume user understands how pollution particles are measured.</ul><ul> Assume that the user is located within Bristol. </ul> |
| **Steps** | <ol> <li> *Open Historic Pollution Data*.</li><li>Click on *Find locations with low pollution levels* on the nav section</li><li>Show the results to the user.</li><li>To narrow down the search send location string by clicking location buttons on the header.</li><li>Show the results to the user.</li></ol>  |
| **Variations** |  |
| **Non-functional** |  |
| **Issues** |  |
### Use-Case diagram

![Insert your Use-Case-Diagram Here](images/UseCaseDiagram1.png)

## Software Requirements Specification

### Functional requirements
  
|  ***Functional requirements*** |   ***Definition*** |    ***Use-Case*** | 
| -------------------------------------- | ------------------- | ------------------- |
| **FR1** | The system must get all pollution records from the database. | UC1 |
| **FR2** | The system should get all pollution records from the locations user selects. | UC1 |
| **FR3** | The system could have a map that pintpoints total records collected over the years. | UC1 |
| **FR4** | The system could have an audio that helps the user navigate our website. | UC1 |
| **FR5** | The system must get Nitrogen Dioxide (NO2) pollution records from the database that are higher or equal to 100µg/m3   | UC2 |
| **FR6** | The system should get the highest pollution records from the locations the user selects. | UC2 |
| **FR7** | The system must get Nitrogen Dioxide (NO2) pollution records from the database that are lower or equal to 8µg/m3   | UC3 |
| **FR8** | The system should get the lowest pollution records from the locations the user selects. | UC3 |
| **FR9** | The system won't have a GPS fucntion that guides people to the less polluted areas. | UC3 |



### Non-Functional Requirements

|  ***Non-Functional requirements*** |   ***Definition*** |    ***Use-Case*** | 
| -------------------------------------- | ------------------- | ------------------- |
| **NFR1** | The app should work on iOS (Portability) | UC1 |
| **NFR2** | Less polluted areas should not be further than 1 mile from person looking to exercise outdoors (usability) | UC2 |
| **NFR4** | It should display up to 5 nearest less polluted areas on one page (usability) | UC3 |
| **NFR5** | It could make suggestions wheather the area is a good place to exercise or not (usability) | UC1, UC2, UC3 |
| **NFR6** | It must show current pollution levels in the location provided (reliability) | UC1, UC2, UC3 |


