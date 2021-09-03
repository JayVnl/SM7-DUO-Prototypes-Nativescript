<template>
    <Page>
        <ActionBar title="NS6Vue AR"></ActionBar>
        <GridLayout>
            <AR trackingMode="WORLD" debugLevel="FEATURE_POINTS" :planeMaterial="planeMaterial" planeOpacity="0.4" planeDetection="HORIZONTAL" showStatistics="false" @arLoaded="arLoaded" @sceneTapped="sceneTapped" @planeTapped="planeTapped" @planeDetected="planeDetected">
            </AR>
        </GridLayout>
    </Page>
</template>
<script>
import { Color } from "@nativescript/core";
// import { isIOS, isAndroid } from "tns-core-modules/platform";
export default {
    data() {
        return {
            planeMaterial: new Color("white"),          
        }
    },
    methods: {
        arLoaded(arLoadedEventData) {
            console.log(">> AR Loaded!");
            const arView = arLoadedEventData.object;
        },
        planeDetected(ARPlaneDetectedEventData) {
            console.log(">> plane Detected!")            
        },
        planeTapped(arPlaneTappedEventData) {
            console.log(">> plane Tapped!")
            const arPlane = arPlaneTappedEventData.object;
            const position = arPlaneTappedEventData.position  
            console.log(position)
        },
        sceneTapped(ARSceneTappedEventData) {
            console.log(">> scene Tapped!")
            const arScene = ARSceneTappedEventData.object;
            const position = ARSceneTappedEventData.position
            console.log(position)
        }
    },
};
</script>
<style scoped lang="scss"> 
</style>