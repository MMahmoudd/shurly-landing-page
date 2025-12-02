<template>
    <div class="contact-component">
        <v-container>
            <v-row>
                <v-col md="6">
                    <h2>Contact Us</h2>
                    <p>We'd love to hear from you! Please fill out the form below and our team will get back to you as soon as possible.</p>
                </v-col>
                <v-col md="6">
                    <div class="form">
                                            <v-row>
                        <v-col md="6" cols="12">
                            <v-text-field
                                label="First name"
                                placeholder="First name"
                                outlined
                                dense
                                hide-details
                            ></v-text-field>
                        </v-col>
                        <v-col md="6" cols="12">
                            <v-text-field
                                label="Last name"
                                placeholder="Last name"
                                outlined
                                dense
                                hide-details
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                label="Email"
                                placeholder="Email"
                                outlined
                                dense
                                hide-details
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-textarea
                                label="Message"
                                placeholder="Message"
                                outlined
                                dense
                                hide-details
                            ></v-textarea>
                        </v-col>
                        <v-col md="6" cols="12">
                            <v-btn>
                                Submit
                            </v-btn>
                        </v-col>
                    </v-row>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style lang="scss">
    .contact-component{
        padding: 40px 0;
        border-bottom: 1.5px solid #FFFFFF33;
        h2{
            color: #fff;
            font-size: 34px;
            font-weight: 700;
        }
        p{
            color: #fff;
            font-size: 20px;
            font-weight: 500;
        }
        .form{
            color: #D6DDE666;
            *{
                color: #D6DDE666;
                border-color: #D6DDE666;
            }
            .v-input{
                border-radius: 8px !important;
                background: #FFFFFF33;
                label{
                    color: #D6DDE666;
                }
                .primary--text{
                    color: #fff !important;
                }
                input{
                    color: #fff !important;
                    &::placeholder{
                        color: #fff !important;
                    }
                }
            }
            .v-btn{
                background-color: $second-color;
                width: 100%;
                .v-btn__content{
                    color: #000A14 !important;
                    font-size: 15px;
                    font-weight: 600;
                    text-transform: capitalize;
                    letter-spacing: 0px;
                }
            }
        }
    }
</style>