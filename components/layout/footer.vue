<template>
    <div class="footer-component">
        <v-footer
            :absolute="!fixed"
            app
            >
            <v-container>
                <v-row>
                    <v-col md="4">
                        <img src="../../assets/images/logo.svg" alt="logo">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipiscin eli a sit facilisis volutpat interdum non a magna tempus amet velit dolor sit.
                        </p>
                    </v-col>
                    <v-col md="2">
                        <p>
                            <nuxt-link to="/">
                                About Us
                            </nuxt-link>
                        </p>
                        <p>
                            <nuxt-link to="/">
                            Career
                        </nuxt-link>
                        </p>
                        <p>
                            <nuxt-link to="/">
                            Support
                        </nuxt-link>
                        </p>
                    </v-col>
                     <v-col md="2">
                        <p>
                            <nuxt-link to="/">
                            Legal
                        </nuxt-link>
                        </p>
                        <p>
                            <nuxt-link to="/">
                            Terms of Service
                        </nuxt-link>
                        </p>
                        <p>
                            <nuxt-link to="/">
                            Privacy
                        </nuxt-link>
                        </p>
                    </v-col>
                    <v-col md="2">
                        <p>
                            <nuxt-link to="/">
                            Twitter
                        </nuxt-link>
                        </p>
                        <p>
                            <nuxt-link to="/">
                            Instagram
                        </nuxt-link>
                        </p>
                        <p>
                            <nuxt-link to="/">
                            Linkedin
                        </nuxt-link>
                        </p>
                    </v-col>
                    <v-col md="2">
                        <p>
                            <nuxt-link to="/">
                            hi@Shurrly.com
                        </nuxt-link>
                        </p>
                        <p>
                            <nuxt-link to="/">
                            966-000-1234
                        </nuxt-link>
                        </p>
                    </v-col>
                </v-row>
            </v-container>
        </v-footer>
        <p class="text-center copyRight w-100">Copyright @ Shurrly 2024. All Rights Reserved.</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            fixed: false,
        }
    },
}
</script>
<style lang="scss">
    .footer-component{
        .v-footer{
            background: #0C132F !important;
            color: #fff;
            padding: 60px 0;
            a{
                color: #fff !important;
                text-decoration: unset !important;
                margin-bottom: 15px !important;
            }

        }
        .copyRight{
            color: #fff !important;
            z-index: 3;
            position: relative;
        }
    }
</style>