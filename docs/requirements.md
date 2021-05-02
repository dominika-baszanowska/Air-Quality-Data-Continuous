# Requirements

## User Needs

### Actors tbc
1. People exercising outdoors, such as runners, cyclist, walkers etc. 
2. People living within Bristol, interested in air quality.
3. Environment and health concious people.
4. People suffering from certain diseases where fresh air is important for them e.g. asthma.
5. A maintainer, who takes care of the app, fixes problems and develops new features. 

### User stories

1. As a runner I want to find the less polluted locations, so that I can breathe quality air.
2. As a granpa I want to see the pollution levels in certain areas so that I can plan a walk with my grandsons ahead. 
3. TBD As a person with asthma I want to find a place in Bristol where there is little pollution so that I can enjoy a walk with my friends.

### Use Cases

| UC1        | View Pollution Data Using an Area Dropdown | 
| -------------------------------------- | ------------------- |
| **Description** | As a person interested in pollution data, I want to view data by area. This will be done with a page which will contain a dropdown with all available locations. Selecting the dropdown will then display the pollution data for the corresponding location.|
| **Actors** | People, that are active outdoors e.g. cyclist, runners. People interested in pollution level.|
| **Assumptions** | Assume that user would have the app downloaded. Assume, that the user is located within Bristol boundary.|
| **Steps** | People exercising outdoors would download the app. Next they would choose their area from dropdown available. System would get information from data base to show the pollution level at the chosen location and show cleaner areas nearby.|
| **Variations** |  |
| **Non-functional** |  |
| **Issues** |  |

| UC2        | Find Less Polluted Areas On a Map | 
| -------------------------------------- | ------------------- |
| **Description** | As a person exercising outdoors I want to be able to find the less polluted areas on a map |
| **Actors** | Anyone exercising outdoors |
| **Assumptions** | Geo-location is supported on the person's device |
| **Steps** | <ol>  <li>1. Opt to view less polluted areas in Bristol</li><li>2. Request permission to access user location</li> <li>3. Give permission for geo-location</li> <li>4.Get less polluted areas from database</li> <li>5.View list of less polluted areas</li> 
    </ol>  |
| **Variations** |  |
| **Non-functional** |  |
| **Issues** |  |

| UC3        | Plan Journey Ahead | 
| -------------------------------------- | ------------------- |
| **Description** | Those who exercise outdoors should know which areas are less polluted as it allows them to plan future journeys whilst being health conscious |
| **Actors** | People who exercise outdoors |
| **Assumptions** | Assuming the user has downloaded the app and entered their postcode, the locations with less pollution are the locations the future journey will be planned for and set to |
| **Steps** | Users download the app then enter their postcode so the system can collect data then show areas of low pollution. The user can then decide which route is best to take for their future outdoor exercise. 
| **Variations** |  |
| **Non-functional** |  |
| **Issues** |  |

### Use-Case diagram

![Insert your Use-Case-Diagram Here](images/image_usecase.png)

## Software Requirements Specification

### Functional requirements
  
|  ***Functional requirements*** |   ***Definition*** |    ***Use-Case*** | 
| -------------------------------------- | ------------------- | ------------------- |
| **FR1** | The system could get user geo-location. | UC1 |
| **FR2** | The system shall get the less polluted areas from database. | UC2 |
| **FR3** | The system should allow users to plan ahead a less polluted route.  | UC2 |
| **FR4** | The system won't act as a GPS to guide people to the less polluted areas. | UC3 |

### Non-Functional Requirements

|  ***Non-Functional requirements*** |   ***Definition*** |    ***Use-Case*** | 
| -------------------------------------- | ------------------- | ------------------- |
| **NFR1** | The app should work on iOS (Portability) | UC1 |
| **NFR2** | Less polluted areas should not be further than 1 mile from person looking to exercise outdoors (usability) | UC2 |
| **NFR4** | It should display up to 5 nearest less polluted areas on one page (usability) | UC3 |
| **NFR5** | It could make suggestions wheather the area is a good place to exercise or not (usability) | UC1, UC2, UC3 |
| **NFR6** | It must show current pollution levels in the location provided (reliability) | UC1, UC2, UC3 |


