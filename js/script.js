const app = new Vue({
    el:'#app',
    data:{
        listaSpesa: [
            {
                nome: 'banana',
                prezzoUnit: 2.10,
                check: false,
            },
            {
                nome: 'pasta',
                prezzoUnit: 1.00,
                check: true,
            },
            {
                nome: 'pane',
                prezzoUnit: 2.50,
                check: false,
            },
            {
                nome: 'tonno',
                prezzoUnit: 1.50,
                check: true,
            },
            {
                nome: 'patatine',
                prezzoUnit: 0.75,
                check: false,
            },
        ],
        checkIcon: '<i class="fa-solid fa-circle-check"></i>',
        crossIcon: '<i class="fa-solid fa-circle-xmark"></i>',
        // itemId:'0',
        nuovoNome: '',
        nuovoPrezzo: null,
        nuovoCheck: '',
        totaleSpesa: null,
    },
    methods:{
        pushItem(){
            console.log("pushItem")
            const newItem = {
                nome: this.nuovoNome,
                prezzoUnit: parseFloat(this.nuovoPrezzo),
                check: this.nuovoCheck,
            }
            if(isNaN(newItem.prezzoUnit)){
                newItem.prezzoUnit = 0;
            }
            console.log("newItem: ", newItem.nome, newItem.prezzoUnit, newItem.check)
            this.listaSpesa.push(newItem);
            this.nuovoNome = '';
            this.nuovoPrezzo = '';
            this.nuovoCheck = '';
            this.refreshTotal();
            
        },
        refreshTotal(){
            console.log("refreshTotal")
            this.totaleSpesa = 0;
            this.listaSpesa.forEach((item)=>{
                let numero = item.prezzoUnit;
                if(numero === NaN){
                    numero = 0;
                }
                this.totaleSpesa += numero;
            })
        },
        deleteItem(index){
            this.listaSpesa.splice(index, 1)          
        }
    },
    mounted(){
        this.refreshTotal();
    }
})