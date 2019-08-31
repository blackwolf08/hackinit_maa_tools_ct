// eslint-disable
import React, {useState, useEffect} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import axios from 'axios'
import Chat from '../../components/Chat/Chat'


const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

export default function TableList() {

  const subString = (str)=>{
    return `${str.substring(0, 80)}...`
  }

  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.post('https://cors-anywhere.herokuapp.com/https://us-central1-hypnos-backend-a41f5.cloudfunctions.net/sendMeal').then(res=>{
      console.log(res)
      setData(res.data)
    })
  }, [])
  const classes = useStyles();
  if(data.length == 0){
    return <p>Loading...</p>
  }
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Breakfast</h4>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Name of Dish", "Desciption", "Image"]}
              tableData={[
                [subString(data.breakfast.dish), subString(data.breakfast.desc), <img className="dish-img" src={data.breakfast.image} />]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Lunch</h4>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Name of Dish", "Desciption", "Image"]}
              tableData={[
                [subString(data.lunch.dish), subString(data.lunch.desc), <img className="dish-img" src={data.lunch.image} />]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Dinner</h4>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Name of Dish", "Desciption", "Image"]}
              tableData={[
                [subString(data.dinner.dish), subString(data.dinner.desc), <img className="dish-img" src={data.dinner.image} />]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <Chat />
    </GridContainer>
  );
}
