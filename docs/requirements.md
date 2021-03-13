# Requirements

## User Needs

### Actors
- People exercising outdoors, such as runners, cyclist, walkers etc. 
- People living within Bristol, interested in air quality.
- Environment and health concious people.

### User stories
TODO: Write brief user stories to explain how various actors would interact with the system to accomplish a goal.
    Express these in the form from agile development:- As a (role) I want (goal) so that (benefit). 

### Use Cases
TODO: Describe each use case (one per team member).
    Give each use case a unique ID, e.g. UC1, UC2, ...
    Summarise these using the use-case template below.

| UC1        | Exercising Outdoors | 
| -------------------------------------- | ------------------- |
| **Description** | People that are exercising outdoors should have access to air quality data. That would allow them choose areas that are less polluted. Aiming to find best quality air locally for their sport activity.|
| **Actors** | People, that are active outdoors e.g. cyclist, runners.|
| **Assumptions** | Assume that user would have the app downloaded. Assume, that the user is located within Bristol boundry.|
| **Steps** | People exercising outdoors would download the app. Next they would type their postcode to enable system to show their area's air qulaity. System would get information from data base to show the pollution level at their present localtion and show  cleaner areas nearby. System would also be connected to maps to show the results more clearly.|

| UC2        | Find Less Polluted Areas On a Map | 
| -------------------------------------- | ------------------- |
| **Description** | As a person exercising outdoors I want to be able to find the less poluted areas on a map |
| **Actors** | Anyone exercising outdoors |
| **Assumptions** | Geo-location is supported on the person's device |
| **Steps** | <ul><li>Opt to view less polluted areas in Bristol</li><li>Request permission to access user location</li><li>Give permission for geo-location</li><li>Get less polluted areas from database</li><li>View list of less pulluted areas</li></ul> |

| UC3        | Plan Journey Ahead | 
| -------------------------------------- | ------------------- |
| **Description** | TBD |
| **Actors** | TBD |
| **Assumptions** | TBD |
| **Steps** | TBD |

|USE-CASE ID, UC1, UC2...| Use-Case NAME|
|**Description** | TODO: Goal to be achieved by use-case and sources for requirement.|
|**Actors** | TODO: List of actors involved in use-case.|
|**Assumption** | TODO: Pre/post-conditions if any</td></tr> |
| **Steps** | TODO: Interactions between system and actors necessary to achieve goal.|
| **Variations** | TODO: OPTIONAL - Any variations in the steps of a use case |
| **Non-functional** | TODO: OPTIONAL - List of non-functional requirements that the use case must meet. |
| **Issues** | TODO: OPTIONAL - List of issues that remain to be resolved |

TODO: Your Use-Case diagram should include all use-cases.
![Insert your Use-Case-Diagram Here](images/image_usecase.png)

## Software Requirements Specification

### Functional requirements
  
|  ***Functional requirements*** |   ***Definition*** |    ***Use-Case*** | 
| -------------------------------------- | ------------------- | ------------------- |
| **FR1** | The system shall get user geo-location | UC2 |
| **FR2** | The system shall get the less polluted areas from database | UC2 |
| **FR3** | TBD | TBD |

### Non-Functional Requirements

|  ***Non-Functional requirements*** |   ***Definition*** |    ***Use-Case*** | 
| -------------------------------------- | ------------------- | ------------------- |
| **NFR1** | The app should work on iOS (Portability) | UC1, UC2, UC3 |
| **NFR2** | Less polluted areas should to be no further than 1 mile from person looking to exercise outdoors | UC1, UC2, UC3 |
| **NFR3** | TBD | TBD |


