import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  articles = [
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    },
    {
        "source": {
        "id": "cbc-news",
        "name": "CBC News"
        },
        "author": "CBC News",
        "title": "Pakistan rescues 2,000 from floods as UN warns of more child deaths to come | CBC News",
        "description": "Pakistan's armed forces have rescued 2,000 more people stranded by rising floodwaters, they said on Friday, in a disaster blamed on climate change that has swamped about a third of the South Asian nation and is still growing.",
        "url": "http://www.cbc.ca/news/world/pakistan-flood-disaster-child-deaths-water-borne-diseases-homelessness-refugees-1.6570750",
        "urlToImage": "https://i.cbc.ca/1.6570774.1662124573!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/pakistan-floods.jpg",
        "publishedAt": "2022-09-02T14:22:20.75186Z",
        "content": "Pakistan's armed forces have rescued 2,000 more people stranded by rising floodwaters, officials said on Friday, in a disaster blamed on climate change that has swamped about a third of the South Asi… [+4095 chars]"
        },
      
      {"source":{"id":"google-news-uk","name":"Google News (UK)"},"author":"https://www.facebook.com/bbcnews","title":"Cressida Dick: Sadiq Khan wrongly ousted Met chief - report","description":"The mayor of London Sadiq Khan has criticised the review, describing it as \"clearly biased\".","url":"https://www.bbc.co.uk/news/uk-england-london-62766240","urlToImage":"https://ichef.bbci.co.uk/news/1024/branded_news/4FDE/production/_126564402_cressidadick.jpg","publishedAt":"2022-09-02T14:56:06+00:00","content":"Dame Cressida Dick \"felt intimidated\" into stepping down as Metropolitan Police commissioner after an ultimatum from Sadiq Khan, according to a review.\r\nShe quit in February when the mayor of London … [+6632 chars]"},
      {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "BBC News",
        "title": "How Pakistan floods are linked to climate change",
        "description": "Pakistan's geography - and its immense glaciers - make it vulnerable to climate change.",
        "url": "http://www.bbc.co.uk/news/science-environment-62758811",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/2C7A/production/_126568311_b148fe4bbe106c7b240a200008ea33ccd3a4889d.jpg",
        "publishedAt": "2022-09-02T15:22:18.2291365Z",
        "content": "By Georgina RannardBBC News Climate and Science\r\nThe devastating floods in Pakistan are a \"wake-up call\" to the world on the threats of climate change, experts have said. \r\nThe record-breaking rain w… [+4497 chars]"
        },
      {
        "source": {
        "id": "axios",
        "name": "Axios"
        },
        "author": "Ben Geman",
        "title": "Gina McCarthy, Biden's top domestic climate aide, is stepping down",
        "description": "She has played a central role in making climate change a government-wide priority.",
        "url": "https://www.axios.com/2022/09/02/gina-mccarthy-biden-climate-resignation",
        "urlToImage": "https://images.axios.com/4NCG1vVdBXXO00-EFpxAr7zIVP8=/0x0:5824x3276/1366x768/2022/04/14/1649973354041.jpg",
        "publishedAt": "2022-09-02T16:29:00Z",
        "content": "Gina McCarthy, President Biden's domestic climate adviser, said she is leaving the administration in mid-September, according to a source familiar with the plans.\r\nWhy it matters: McCarthy, who led t… [+1508 chars]"
        }
  ]

  
  constructor() {
    super();
    console.log("hello this is a constructor from news component");
    this.state = {
      article: this.articles,
      loading: false,
    }
  }
  

  async componentDidMount(){
    let urly="https://newsapi.org/v2/top-headlines?country=in&apiKey=62a3fcd0c0f5405e84e3e9ccd671045a"
    let data=await fetch(urly);
    let parsedData=await data.json()
    console.log(data);
    this.setState({article:parsedData.articles})
}
  render() {
    return (

      <div className="container my-3">
        <h2 >News-top headlines</h2>
    
        <div className="row">
        {this.state.article.map((element)=>{
            console.log(element);
            
          return<div className="col-md-4"  key={element.urlToImage}>
            <Newsitem
           
              title={element.title?element.title.slice(0,50):""}
              description={element.description?element.description.slice(0,90):""}
              imageurl={!element.imageurl?element.urlToImage:"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg"}
              newsurl={element.url}/>
            
          </div>
          })}
        </div>
      </div>
    )
  }
}

export default News;
