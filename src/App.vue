<template>
    <v-app id="app">
        <v-main>
            <v-container class="fill-height pa-0">
                <v-row justify="center" align="center">
                    <v-col
                        cols="12"
                        sm="12"
                        md="6"

                        class="text-center"
                    >
                        <v-img class="main-logo" src="@/assets/logo-with-text.png"></v-img>
                        <v-row no-gutters>
                            <v-col md="6" sm="12">
                                    <v-img
                                        class="mt-3 google-badge"
                                        alt='Disponível no Google Play'
                                        src='https://play.google.com/intl/en_us/badges/static/images/badges/pt-br_badge_web_generic.png'/>

                            </v-col>
                            <v-col md="6" sm="12" class="" align-self="center">
                                <v-img src="@/assets/app-store-badge.svg" class="ma-7 apple-badge"/>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="12"
                        md="6"
                    >
                        <v-img src="@/assets/phone-frame.png" class="phone-frame"></v-img>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>

  export default {
    name: 'App',
  }
</script>

<style>
    #app {
        background: #2092E5;
        margin: 0;
        text-align: center;
    }

    .main-logo {
        margin: 0 auto;
        max-height: 50vh;
    }

    .google-badge {
        height: auto;
        width: auto;
        max-height: 100%;
        max-width: 100%;
    }

    .phone-frame {
        height: 95vh;
    }
</style>
