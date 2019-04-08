import withStyles from "@material-ui/core/styles/withStyles";
import React from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";


import avatar from "assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};


 
class UserProfile extends React.Component {
 
    state = {
        email: '',
        name: '',
        lastName: '',
        petName: '',
        age: '',
    }
 
    handleChangeEmail = (event) => {
        const email = event.target.value;
        this.setState({ email });      
    }

    handleChangeName = (event) => {     
      const name = event.target.value;    
      this.setState({ name });
    }

    handleChangeLastName = (event) => {     
      const lastName = event.target.value;    
      this.setState({ lastName });
    }
    
    handleChangePetName = (event) => {     
      const petName = event.target.value;    
      this.setState({ petName });
    }

    handleChangeAge = (event) => {     
      const age = event.target.value;    
      this.setState({ age });
    }
 
    handleSubmit = () => {
        // your submit logic
    }
 
    render() {
        const { email } = this.state;
        const { name } = this.state;
        const { lastName } = this.state;
        const { petName } = this.state;
        const { age } = this.state;

        const styles = {
          cardCategoryWhite: {
            color: "rgba(255,255,255,.62)",
            margin: "0",
            fontSize: "14px",
            marginTop: "0",
            marginBottom: "0"
          },
          cardTitleWhite: {
            color: "#FFFFFF",
            marginTop: "0px",
            minHeight: "auto",
            fontWeight: "300",
            fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
            marginBottom: "3px",
            textDecoration: "none"
          }
        };
        return (
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
                onError={errors => console.log(errors)}               
            >
              <div>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={8}>
                    <Card>
                      <CardHeader color="primary">
                        <h4 className={styles.cardTitleWhite}>Registrar Usuario</h4>
                        <p className={styles.cardCategoryWhite}>Completa tu perfil</p>
                      </CardHeader>
                      <CardBody>
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={5}>                           
                          <TextValidator
                            label="Nombre"
                            onChange={this.handleChangeName}
                            formControlProps={{
                              fullWidth: true
                            }}                          
                            name="name"
                            value={name}
                            validators={['required']}
                            errorMessages={['Este campo es requerido']}
                          />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <TextValidator    
                            label="Apellido"
                            name="lastName"
                            value={lastName}
                            onChange={this.handleChangeLastName}                                                                
                            validators={['required']}
                            errorMessages={['Este campo es requerido']}
                          />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                          <TextValidator
                              label="Email"                              
                              onChange={this.handleChangeEmail}
                              name="email"
                              value={email}
                              validators={['required', 'isEmail']}
                              errorMessages={['Este campo es requerido', 'El email no es válido']}
                          />
                          </GridItem>
                        </GridContainer>
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={5}>
                            <TextValidator
                                label="Nombre de la Mascota"
                                onChange={this.handleChangePetName}
                                style={{ marginTop: "25px" }}
                                name="petName"
                                value={petName}                              
                                validators={['required', 'matchRegexp:^[A-Za-z]*$']}
                                errorMessages={['Este campo es requerido', 'Solo cadenas de texto']}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                          <TextValidator
                                label="Edad de la Mascota"
                                onChange={this.handleChangeAge}
                                style={{ marginTop: "25px" }}
                                name="age"
                                value={age}                              
                                validators={['minNumber:0', 'maxNumber:20', 'matchRegexp:^[0-9]*$','required']}
                                errorMessages={['Solo se permiten números positivos','Hasta 20 años','Este campo es requerido']}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <TextValidator
                              label="Raza"                                                     
                              style={{ marginTop: "25px" }}
                              name="raza"                           
                           
                          />
                          </GridItem>
                        </GridContainer>                     
                 
                      </CardBody>
                      <CardFooter>
                        <Button type="submit" color="primary">Guardar</Button>
                      </CardFooter>
                    </Card>
                  </GridItem>
                </GridContainer>                
              </div>       
             
              
                
            </ValidatorForm>
            
        );
    }
}
export default withStyles(styles)(UserProfile);
