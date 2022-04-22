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
        itemId:'0',
        nuovoNome: '',
        nuovoPrezzo: null,
        nuovoCheck: '',
        totaleSpesa: 0,
    },
    methods:{
        pushItem(){
            console.log("push")
            console.log('nuovo item: ',this.nuovoNome)
            const newItem = {
                nome: this.nuovoNome,
                prezzoUnit: parseFloat(this.nuovoPrezzo),
                check: this.nuovoCheck,
            }
            console.log("we, nuovo prezzo è: ", this.nuovoPrezzo)
            console.log("questo check: ",newItem.check)
            this.listaSpesa.push(newItem);
            this.nuovoNome = '';
            this.nuovoPrezzo = '';
            this.refreshTotal();
        },
        refreshTotal(){//questo non funziona
            console.log("refresh")
            console.log(this.listaSpesa)
            this.listaSpesa.forEach((item)=>{
                let numero = item.prezzoUnit;
                if(numero === NaN){
                    numero = 0;
                }
                console.log(numero) 
                this.totaleSpesa += numero;
            })
        }
    }
})