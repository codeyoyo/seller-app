<template>
    <div class="star-box">
        <span class="star" v-for='(item,index) in starGroup' :class='item' ></span>
    </div>
</template>
<script>
export default{
    props:{
        score:0
    },
    data(){
        return{
            starGroup:[]
        }
    },
    methods:{
        
    },
    created(){
        let len = parseInt(this.score),
            floor = parseFloat(this.score) - len,
            countStar = 5;
        for (var i = 0; i < len; i++) {
            this.starGroup.push('on');
        }
        if (floor > 0) {
            this.starGroup.push('half');
        }
        let residue = countStar - this.starGroup.length;
        if(residue>0){
            for (var j = 0; j < residue; j++) {
                this.starGroup.push('off');
            }
        }
    }
}
</script>
<style>
    .star-box{
        display: inline;
        vertical-align: sub;
    }
    .star:nth-child(1){
        margin-left: 0px;
    }
    .star {
        margin-left: 10px;
        display: inline-block;
        width: 20px;
        height: 20px;
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .on {
        background-image: url("./star24_on@2x.png");
    }

    .half {
        background-image: url("./star24_half@2x.png");
    }

    .off {
        background-image: url("./star24_off@2x.png");
    }
</style>
