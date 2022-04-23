const app = new Vue({
    el:'#app',

    data:{
        checkIcon: '<i class="fa-solid fa-circle-check"></i>',
        crossIcon: '<i class="fa-solid fa-circle-xmark"></i>',
        nuovoNome: '',
        nuovoPrezzo: null,
        nuovoCheck: '',
        totaleSpesa: null,
        categorie:[
            {
                nome: 'Spesa',
                lista:[
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
                ]
            },
            {
                nome: 'Allenamento',
                lista:[
                    {
                        nome: 'palestra',
                        prezzoUnit: 2.10,
                        check: false,
                    },
                    {
                        nome: 'pesi',
                        prezzoUnit: 1.00,
                        check: true,
                    },
                    {
                        nome: 'recupero',
                        prezzoUnit: 2.50,
                        check: false,
                    },
                ]
            },
            {
                nome: 'Attività',
                lista:[
                    {
                        nome: 'pescare',
                        prezzoUnit: 2.10,
                        check: false,
                    },
                    {
                        nome: 'suonare',
                        prezzoUnit: 1.00,
                        check: true,
                    },
                    {
                        nome: 'cucinare',
                        prezzoUnit: 2.50,
                        check: false,
                    },
                ]
            }
        ],
        categoriaAttiva:{
            nome:'Spesa',
        },
        indiceGenerale: 0,
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

            this.categorie[this.indiceGenerale].lista.push(newItem)
            //console.log("categoria attiva: ",this.categoriaAttiva)
            
            this.nuovoNome = '';
            this.nuovoPrezzo = '';
            this.nuovoCheck = '';
            this.refreshTotal();
            
        },

        refreshTotal(){
            console.log("refreshTotal")
            this.totaleSpesa = 0;
            this.categorie[this.indiceGenerale].lista.forEach((item)=>{
                let numero = item.prezzoUnit;
                this.totaleSpesa += numero;
            })
        },

        deleteItem(index){
            this.categorie[this.indiceGenerale].lista.splice(index, 1)
        },

        svuotaLista(){
            this.categorie[this.indiceGenerale].lista = [];
            this.refreshTotal();
        },

        getValue(){
            if(this.categoriaAttiva.nome === 'Spesa'){
                this.indiceGenerale = 0;
            } else if(this.categoriaAttiva.nome === 'Allenamento'){
                this.indiceGenerale = 1;
            } else if(this.categoriaAttiva.nome === 'Attività'){
                this.indiceGenerale = 2;
            };
            console.log('indice generale: ',this.indiceGenerale)
        }
    },

    mounted(){
        this.categoriaAttiva.nome = 'Spesa';
        this.refreshTotal();
    }
})