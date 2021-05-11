# Design

## Behavioural design

### Scenario UC1

A council official, which we have classified within the *Healthy Citizen actor*, has been requested to analyse how the national lockdown impacted the emission of particles such as Nitrogen Dioxide (NO2) around certain locations in Bristol during the month of March. To complete this task, the official will visit the *Historic Pollution Data* website which is kept updated by the *maintainer*. On this website the user will be able to select a table with the name of *See pollution records from March*, he will then narrow down his search by *selecting* his desired location e.g., Temple Way. This request will be rendered by the *Historic Pollution Data Server* which will send a query to the *Database* so that a result is provided to the original request made by the official. 

### Sequence Diagram UC1

![Insert your Interaction/Sequence Diagrams for each use-case here.](images/UC1_SequenceDiagram.png)

### Scenario UC2

A person who has asthma has been advised to check the pollution levels at different days, and times of the day around the locations she usually visit when walking with her friends. She was advised to visit the *Historic Pollution Data* website, which is kept updated by the *maintainer*, on it she will be able to select a table with the name of *Find locations with high pollution levels* , once she clicks on this table she will be able to narrow down her search by *selecting* the location she usually walks by with her friends to make sure Nitrogen Dioxide (NO2) pollution levels in that location are not higher or equal to 100µg/m3. By following these steps she will have peace of mind that her condition will not ruin a walk with her friends. 

### Sequence Diagram UC2

![Insert your Interaction/Sequence Diagrams for each use-case here.](images/UC2_SequenceDiagram.png)

### Scenario UC3
A granpa is taking his grandsons out for a walk, but he knows it is peak hour so he wants to compare the areas with higher concentration of pollution, against areas with lower levels of pollution, this will enable him to avoid certain areas with higher levels of pollution. 

### Sequence Diagram UC3

![Insert your Interaction/Sequence Diagrams for each use-case here.](images/UC3_SequenceDiagram.png)

## User Interface design
TODO: Specify and develop a user interface mockup using an HTML wireframe.

![Insert your wireframe screenshots for each use-case here](images/wireframe.png)
