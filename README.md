# b4-project
Here is a summary of how we worked on our project.

**WRITE-UP ON PRODUCT**

# Types of Cyber Attacks : Irene
file | description
-----|------------
[Data Source](http://www.verizonenterprise.com/verizon-insights-lab/dbir/2017/) | Visualization data from Verizon's 2017 Data Breach Investigations Report, a downloadable PDF
[Sunburst](https://bl.ocks.org/vasturiano/12da9071095fbd4df434e60d52d2d58d) | Visualization
[Data in JSON](charts/sunburst.json) | Reformatted for use in D3
[Types of Attacks](https://irenesolaiman.github.io/b4-project/types.html) | Project webpage

This is terrible hygiene, but I created a folder called "chart-practice" with the visualization's original data, and first made sure it would run on my local server. I then manually inserted the data from the PDF one by one (I could not figure out how to extract data from a PDF, especially when the data is provided in different formats, like bar graphs and tables). I kept running by trial and error until I had a sunburst I wanted working on my local server, then transported it to my b4-project folder and pushed it to GitHub.

# Breaches : Irene
file | description
-----|------------
[Data Source](http://breachlevelindex.com/) | Visualization data from breachlevelindex
[Donut](https://bl.ocks.org/mbhall88/b2504f8f3e384de4ff2b9dfa60f325e2) | Visualization
[Data in CSV](charts/donut.csv) | Reformatted for use in D3
[Breaches](https://irenesolaiman.github.io/b4-project/breaches.html) | Project webpage

I managed to somehow 'scrape' the website using Inspect Element and pull the data for breaches by sector from 2013 to 2017. I put this in an Excel document and converted it to CSV. This is also terrible hygiene, but I used the folder called "chart-practice" with the donut visualization's original data, and first made sure it would run on my local server. I then manually inserted the data from my created CSV into the visualization's CSV one by one (I was afraid because it kept breaking when I used my own CSV). I kept running by trial and error until I had a donut I wanted working on my local server, then transported it to my b4-project folder and pushed it to GitHub.

# Cybersecurity Index: Wee Keong
file | description
-----|------------
[Data Source 1](https://knoema.com/GCSI2015/global-cybersecurity-index) and [Data Source 2](https://data.worldbank.org/indicator/IT.NET.USER.ZS) | [Visualization from Mike Bostock’s Block 3887118 Scatterplot](https://bl.ocks.org/mbostock/3887118) | Visualization
[Data for Chart 1](charts/cyberindex.csv), [Data for Chart 2](charts/cyberindex-europe.csv) and [Data for Chart 3](charts/cyberindex-africa.csv)) | Reformatted for use in D3
[Cybersecurity Index](https://irenesolaiman.github.io/b4-project/cyberindex.html) | Project webpage

My data came from two sources: World Bank (Cybersecurity Index) and the International Telecommunication Union (uoloaded onto Knoema.com). Both sets of data were in CSV format. I merged the two datasets together, matching them using the VLOOKUP function in Microsoft Excel. There were a few countries whose names were listed differently in the two documents, e.g. "Korea, Rep" vs "Republic of Korea". For these countries, I had to match the data together manually. 

I made several changes to the default code for my visualisation, namely: (1) I shifted the legend from the top right quadrant of my first chart to the top left quadrant, as the former was too crowded with data points; (2) I changed both x and y axes to start from 0 for consistency across all 3 charts; (3) I changed the x and y axes to end at 100 and 1.0 respectively, instead of the maximum value of my datapoints for consistency across all 3 charts; and (4) I removed the black border around the dots in my charts. For my second and third charts, which only shows data from "Europe and Central Asia" and "Sub-Saharan Africa" respectively, I removed the legend and changed the default color of the dots to match the legend in the first chart. I worked on these changes on a branch and pushed it to GitHub master after I was satisfied with the final charts. 

# Stephane
file | description
-----|------------
[Data Source](https://data.worldbank.org/indicator/IT.NET.USER.ZS)| Visualization data from the World Bank 
[Heatmap](http://bl.ocks.org/PBrockmann/635179ff33f17d2d75c2) | Visualization
[Data for Heatmap](raw_data/metrics_ocmip5_2.json) | Reformatted for use in D3
[Internet Penetration Heatmap](https://irenesolaiman.github.io/b4-project/internetpenetration.html) | Project webpage

My data came from the World Bank (Internet Penetration). It was originally in csv format. 
(1) I edited it using Excel: 
(a) I added a variable: the region for each country. I pulled from the World Bank's MECE categorization of countries in regions (a simple index match on the data from: data.worldbank.org/data/downloads/site-content/Trac.xls) and performed a simple index-match function. 
(b) I transformed the data into strings adapted to a json format. Referring to cell X listing "United States of America", I queried for ="["&char(34)&X&char(34(&"];" which gave me ["United States of America"];   I did this on the country names, the region names, and the internet penetration data.
(2) I then copy pasted it into a json. 
(a) In the process, I create from scratch the variable "region". The original json file downloaded from bl.ocks only had the one variable and its corresponding numerical data. 
(b) The new json file contains >200 rows, versus the original 6 rows of data. 

I made several changes to the default code for my visualisation, namely: 
(1) I shifted the legend to the right hand side of the graphic, and change the spacing between the legend and the graph. 
(2) I placed the default legend on the "PuOr" palette: it is what shows by default in the selector and also what displays by default when you load the page.
(3) I changed the legend/palette scale to reflect a domain from 0 to 100, and not from 0 to 1. 
(4) I took out the zoom function
(5) I took out the function that enables the viewer to drag the heatmap across the screen 


**RETROSPECTIVE**

# Irene
* Start: Looking at the visualizations at the same time as the datasets. I ended up using the dataset that fit best with a visualization that I wanted to create. It would've been more efficient to map the website with both the data and existing visualization code. 
* Stop: Getting bogged down in the minute aspects of the project. I spent a good few hours on making a responsive webpage menu just for funsies when I should have been doing this write up.
* Continue: Excellent group communication and morale. I was getting quite worried towards the last Saturday, but our team kept confident and supportive. We had good structure and a common vision that kept us moving.

# Wee Keong
Start: We were too focused on getting the best datasets which we could analyse, and started on our visualisations relatively late. On retrospect, we could have started on our visualisations earlier, to give ourselves more time to improve on them.
Stop: Being too easily distracted by peripheral issues during our scrum meetings, which causes our meetings to overrun beyond the ideal 15 minuts on a few occasions.
Continue: Having open channels of communication and having scrum meetings every day, which provided me with a good overview of our progress and where the key blockers are.

# Stephane
* Start: reviewing the architecture of the site together regularly. Following the previous retrospective, we had been careful to communicate the changes in styles and formatting made (and it was a morale booster too: it's visible change). It may be beneficial for the future to also discuss the changes made to the back-end e.g. should we delete the "our-team" folder now that the information is in the homepage accordion?
* Stop: Thinking in terms of ouput. Giving the time allocated to the project, best to start with the dataset and start thinking of an output graph from there. Ideally my heatmap would have compared penetration to the cybersecurity index but the latter was only available for 3 years. In addition, stop relying on Wee for wonderful snacks as we spent our days coding... 
* Continue: Scrum meetings every day standing up; sharing the "learnt lessons" from us individually overcoming blockers ("so I did this and that's how I got it to work"); supporting each other's progress and morale. 

**TEAM PROCESSES**

# Scrum Meetings:
5 Jan (Fri): In class
6 Jan (Sat): In person
7 Jan (Sun): On Slack
8 Jan (Mon): On Slack
9 Jan (Tue): Before class
10 Jan (Wed): In Class
11 Jan (Thu): On Slack
12 Jan (Fri): Before Class
13 Jan (Sat): In Person
14 Jan (Sun): In Person

# Burn-down/Burn-up:

Day 1:
Burn-down: -0
Burn-up: +24
Balance: 24

Day 2:
Burn-down: -15
Burn-up: +16
Balance: 35

Day 3:
Burn-down: -9
Burn-up: +13
Balance: 39

Day 4:
Burn-down: -20
Burn-up: +21
Balance: 40

Day 5:
Burn-down: -8
Burn-up: +42
Balance: 74

Day 6:
Burn-down: -21
Burn-up: +8
Balance: 61

Day 7: 
Burn-down: -13
Burn-up:+34
Balance: 82

Day 8:
Burn-down: -11
Burn-up: +21
Balance: 91

Day 9:
Burn-down: -45
Burn-up: 0
Balance: 46

Day 10: 
Burn-down: -46
Burn-up: +0
Balance: 0





