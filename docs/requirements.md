# Requirements

## User Needs

### Actors

**Healthy Citizen**
1. People exercising outdoors, such as runners, cyclist, walkers etc. 
2. People living within Bristol, interested in air quality.
3. Environment and health concious people.
4. People suffering from certain diseases where fresh air is important for them e.g. asthma.

**Maintainer** who takes care of the app, fixes problems and develops new features. 

### User stories

1. As a runner I want to find the less polluted locations, so that I can breathe quality air.
2. As a granpa I want to see the pollution levels in certain areas so that I can plan a walk with my grandsons ahead. 
3. TBD As a person with asthma I want to find a place in Bristol where there is little pollution so that I can enjoy a walk with my friends.

### Use Cases

| UC1        | See my area pollution level | 
| -------------------------------------- | ------------------- |
| **Description** | As a person interested in pollution data, I want to view pollution levels in my area. I would like to know air conditions at my daily location and be able to choose different places to go out for an activity if needed.|
| **Actors** | Healthy Citizens.|
| **Assumptions** | Assume that user would have the app downloaded. Assume, that the user is located within Bristol boundary.|
| **Steps** | <ol> <li> Opt to view my area pollution levels.</li><li>Choose your area from the dropdown available.</li><li>Get the chosen area information from database.</li><li>Show the results to the user.</li><li>Suggest less polluted areas nearby.</li> </ol>|
| **Variations** |  |
| **Non-functional** |  |
| **Issues** | Some specific location data may not be available. |


| UC2        | See the most polluted areas | 
| -------------------------------------- | ------------------- |
| **Description** | As a person exercising outdoors I would like to know which areas are most polluted, as it allows me to plan future journeys whilst being health conscious. |
| **Actors** | Healthy Citizens. |
| **Assumptions** | Assuming the user has downloaded the app. |
| **Steps** | <ol> <li>User download the app.</li><li>The user enter their postcode.</li><li>The system collect data from database.</li><li>Displaying results for given postcode.</li> </ol>|
| **Variations** |  |
| **Non-functional** |  |
| **Issues** |  |


| UC3       | Find less polluted area| 
| -------------------------------------- | ------------------- |
| **Description** | As a person exercising outdoor and interested in air quality I want to be able to find the less polluted area. |
| **Actors** | Healthy Citizens. |
| **Assumptions** | Geo-location is supported on the person's device. |
| **Steps** | <ol>  <li>Opt to view less polluted areas in Bristol</li><li>Request permission to access user location</li> <li>Give permission for geo-location</li> <li>Get less polluted areas from database</li> <li>View list of less polluted areas</li> </ol>  |
| **Variations** |  |
| **Non-functional** |  |
| **Issues** |  |
### Use-Case diagram

![Insert your Use-Case-Diagram Here](images/UseCaseDiagram.png)

## Software Requirements Specification

### Functional requirements
  
|  ***Functional requirements*** |   ***Definition*** |    ***Use-Case*** | 
| -------------------------------------- | ------------------- | ------------------- |
| **FR1** | The system could get user geo-location. | UC1 |
| **FR2** | The system shall get the less polluted areas from database. | UC2 |
| **FR3** | The system should allow users to plan ahead a less polluted route.  | UC2 |
| **FR4** | The system won't act as a GPS to guide people to the less polluted areas. | UC3 |
| **tbd** | tbd | tbd |

### Non-Functional Requirements

|  ***Non-Functional requirements*** |   ***Definition*** |    ***Use-Case*** | 
| -------------------------------------- | ------------------- | ------------------- |
| **NFR1** | The app should work on iOS (Portability) | UC1 |
| **NFR2** | Less polluted areas should not be further than 1 mile from person looking to exercise outdoors (usability) | UC2 |
| **NFR4** | It should display up to 5 nearest less polluted areas on one page (usability) | UC3 |
| **NFR5** | It could make suggestions wheather the area is a good place to exercise or not (usability) | UC1, UC2, UC3 |
| **NFR6** | It must show current pollution levels in the location provided (reliability) | UC1, UC2, UC3 |


