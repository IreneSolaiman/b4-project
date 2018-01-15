# b4-project
Here is a summary of how we worked on our project.

#Types of Cyber Attacks : Irene
file | description
-----|------------
[Data Source](http://www.verizonenterprise.com/verizon-insights-lab/dbir/2017/) | Visualization data from Verizon's 2017 Data Breach Investigations Report, a downloadable PDF
[Sunburst](https://bl.ocks.org/vasturiano/12da9071095fbd4df434e60d52d2d58d) | Visualization
[Data in JSON](charts/sunburst.json) | Reformatted for use in D3
[Types of Attacks](https://irenesolaiman.github.io/b4-project/types.html) | Project webpage

This is terrible hygiene, but I created a folder called "chart-practice" with the visualization's original data, and first made sure it would run on my local server. I then manually inserted the data from the PDF one by one (I could not figure out how to extract data from a PDF, especially when the data is provided in different formats, like bar graphs and tables). I kept running by trial and error until I had a sunburst I wanted working on my local server, then transported it to my b4-project folder and pushed it to GitHub.

#Breaches : Irene
file | description
-----|------------
[Data Source](http://breachlevelindex.com/) | Visualization data from breachlevelindex
[Donut](hhttps://bl.ocks.org/mbhall88/b2504f8f3e384de4ff2b9dfa60f325e2) | Visualization
[Data in CSV](charts/donut.csv) | Reformatted for use in D3
[Breaches](https://irenesolaiman.github.io/b4-project/breaches.html) | Project webpage

I managed to somehow 'scrape' the website using Inspect Element and pull the data for breaches by sector from 2013 to 2017. I put this in an Excel document and converted it to CSV. This is also terrible hygiene, but I used the folder called "chart-practice" with the donut visualization's original data, and first made sure it would run on my local server. I then manually inserted the data from my created CSV into the visualization's CSV one by one (I was afraid because it kept breaking when I used my own CSV). I kept running by trial and error until I had a donut I wanted working on my local server, then transported it to my b4-project folder and pushed it to GitHub.

#Cybersecurity Index: Wee Keong
file | description
-----|------------
[Data Source](https://knoema.com/GCSI2015/global-cybersecurity-index and https://data.worldbank.org/indicator/IT.NET.USER.ZS) | Visualization from Mike Bostock’s Block 3887118 Scatterplot (https://bl.ocks.org/mbostock/3887118) | Visualization
[Data in CSV](charts/cyberindex.csv), (charts/cyberindex-europe.csv) and (charts/cyberindex-africa.csv)) | Reformatted for use in D3
[Cybersecurity Index](https://irenesolaiman.github.io/b4-project/cyberindex.html) | Project webpage

My data came from two sources: World Bank (Cybersecurity Index) and the International Telecommunication Union (uoloaded onto Knoema.com). Both sets of data were in CSV format. I merged the two datasets together, matching them using the VLOOKUP function in Microsoft Excel. There were a few countries whose names were listed differently in the two documents, e.g. "Korea, Rep" vs "Republic of Korea". For these countries, I had to match the data together manually. 

I made several changes to the default code for my visualisation, namely: (1) I shifted the legend from the top right quadrant of my first chart to the top left quadrant, as the former was too crowded with data points; (2) I changed both x and y axes to start from 0 for consistency across all 3 charts; (3) I changed the x and y axes to end at 100 and 1.0 respectively, instead of the maximum value of my datapoints for consistency across all 3 charts; and (4) I removed the black border around the dots in my charts. For my second and third charts, which only shows data from "Europe and Central Asia" and "Sub-Saharan Africa" respectively, I removed the legend and changed the default color of the dots to match the legend in the first chart. I worked on these changes on a branch and pushed it to GitHub master after I was satisfied with the final charts. 

#Stephane
