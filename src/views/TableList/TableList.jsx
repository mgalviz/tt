import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

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

function TableList(props) {
  const { classes } = props;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="success">
            <h4 className={classes.cardTitleWhite}>Estatus de solicitudes </h4>
          
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="success"
              tableHead={["Cliente", "Mascota", "Raza","Animal", "Estatus"]}
              tableData={[
                ["Dakota Rice", "Dobby", "Poodle", "Canino","Con cita para: 22/02/2019"],
                ["Miguel Gutierrez", "Hedwig", "Siames", "Felino","Sin cita asignada"],
                ["Luis Rodriguez", "Nagini", "Golden", "Canino", "Chequeo médico"],
                ["Carlos Chaney", "Gollum", "Labrador", "Canino","Información"],
                ["Doris Cumaca", "Malawi", "Poodle", "Canino","Con cita para: 23/03/2019"],
                ["Lily Mendez", "Nemo", "Silveste", "Felino","Por asignar consulta"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>  
    </GridContainer>
  );
}

export default withStyles(styles)(TableList);
