<template>
    <div class="jurney-component d-flex align-center">
        <v-container>
            <v-row class="d-flex align-center">
                <v-col md="6" cols="12" class="d-flex justify-center">
                    <img class="ma-auto" src="../../assets/images/fullMobile.svg" alt="fullMobile">
                </v-col>
                <v-col md="6" cols="12">
                    <h2>Used and trusted by a community of millions</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit in consequat sollicitudin adipiscing facilisi sit et hendrerit diam
                    </p>
                    <v-row>
                        <v-col md="6" >
                            <div class="box text-center">
                                <h3>12+</h3>
                                <p>
                                    Total Years of Mentorship
                                </p>
                            </div>
                        </v-col>
                        <v-col md="6" >
                            <div class="box text-center">
                                <h3>90%</h3>
                                <p>
                                    Dedicated Mentorship Participants
                                </p>
                            </div>
                        </v-col>
                                                <v-col md="6" >
                            <div class="box text-center">
                                <h3>10M</h3>
                                <p>
                                    Engaged Mentorship Participants
                                </p>
                            </div>
                        </v-col>
                                                <v-col md="6" >
                            <div class="box text-center">
                                <h3>250M</h3>
                                <p>
                                    Overall Mentorship Sessions
                                </p>
                            </div>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<style lang="scss">
    .jurney-component{
        height: 100vh;
        margin: 50px 0;
        h2{
            color: #fff;
            font-size: 46px;
            margin-bottom: 15px;
            font-weight: 600;
        }
            p{
                color: #fff;
                font-size: 20px;
                margin-bottom: 15px;
            }
            .box{
                border: 1px solid $second-color;
                color: $second-color;
                border-radius: 16px;
                padding: 16px 33px;
                height: 174px;
                h3{
                    font-size: 48px;
                    font-weight: 700;
                }
                p{
                    color: $second-color;
                    font-size: 18px;
                    font-weight: 500;
                }
            }
    }
</style>