<template>
    <div class="contact-component">
        <v-container>
            <v-row>
                <v-col cols="12" md="6">
                    <h2>{{ $t('landing.contact.title') }}</h2>
                    <p>{{ $t('landing.contact.description') }}</p>
                </v-col>
                <v-col cols="12" md="6">
                    <div class="form">
                                            <v-row>
                        <v-col md="6" cols="12">
                            <v-text-field
                                :label="$t('landing.contact.fields.firstName')"
                                :placeholder="$t('landing.contact.fields.firstName')"
                                outlined
                                dense
                                hide-details
                            ></v-text-field>
                        </v-col>
                        <v-col md="6" cols="12">
                            <v-text-field
                                :label="$t('landing.contact.fields.lastName')"
                                :placeholder="$t('landing.contact.fields.lastName')"
                                outlined
                                dense
                                hide-details
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                :label="$t('landing.contact.fields.email')"
                                :placeholder="$t('landing.contact.fields.email')"
                                outlined
                                dense
                                hide-details
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-textarea
                                :label="$t('landing.contact.fields.message')"
                                :placeholder="$t('landing.contact.fields.message')"
                                outlined
                                dense
                                hide-details
                            ></v-textarea>
                        </v-col>
                        <v-col md="6" cols="12">
                            <v-btn>
                                {{ $t('landing.contact.submit') }}
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
        @media (max-width: 959px) {
            padding: 30px 0;
            h2{
                font-size: 28px;
                margin-bottom: 8px;
            }
            p{
                font-size: 16px;
                line-height: 1.6;
                margin-bottom: 0;
            }
            .form{
                margin-top: 20px;
                .v-input{
                    margin-bottom: 8px;
                }
                .v-btn{
                    height: 42px !important;
                }
            }
        }
        @media (max-width: 600px) {
            h2{
                font-size: 30px;
            }
            p{
                font-size: 15px;
            }
        }
    }
</style>