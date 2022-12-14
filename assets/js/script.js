var app = new Vue (
    {
        el: '#root',
        data: {

            //obj's datas
           imgPath: '../assets/img/avatar',
           imgPathext: '.jpg',

           //contacts[index].messages => recupera l'array di oggetti in un ogg contatto a seconda dell'index al suo interno
           //estrapolare info da array
           //ciclare l'array messages
           //utilizz. var che cambia in base all'index inizializzata a zero

           dinamicIndex: 0,
           //dinamicClass: 'chat-container',
           inputMessage: '',
           nameSearch: '',
           lastAccess: '',
           offline: true,
           selected: false,

           //inset dinamicIndex nella formula dell'astrazione dell'array messagges
           //contacts[dinamicIndex].messagges => array
            
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },      
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],  
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novit???',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che ?? il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: "No, l'ho gi?? mangiata ieri, ordiniamo sushi!",
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],

         

        },



        methods: {

            selectChat: function(index, element){
                console.log(`you're selecting this element`, index);
                this.selected = true;
                this.dinamicIndex = index;
                this.lastAccess = getTimeOfLastMessage(contacts[index]);
                return this.lastAccess
            },

            getLastMessageData(element, index){

        
 
                return element.messages[element.messages.length - 1];
            },

            getTimeOfLastMessage(element, index){
                let archive = element.messages;
                let indexOfLastMessage = archive.length - 1;

                let date = archive[indexOfLastMessage].date;
                let time = date.slice(10,16);

                return time;
            },

            getCurrentTime(element, index){
                let date = element.date;
                let time = date.slice(10,16);
                return time;
            },



            insertMessage(){

                setTimeout(() => this.lastAccess = `ultimo accesso ${currentMoment}`, 3000);

                let d = new Date();
                let currentDate = d.toLocaleDateString();
                let currentHour = dayjs().format('H:mm');
                let currentMoment = currentDate + ' ' + currentHour;

                
                
                if( this.inputMessage == ''){
                } else {
                    let obj = {
                        date: currentMoment,
                        message: this.inputMessage,
                        status: 'sent'
                    }
                    this.offline = false
                    setTimeout(() => this.lastAccess = 'Online', 0000);
                    setTimeout(() => this.lastAccess = 'Sta scrivendo...', 2000);
                    this.inputMessage = '';
                    setTimeout( this.selfAnswer, 3000);
                    setTimeout(() => this.lastAccess = 'Online', 6000);
                    setTimeout(() => this.lastAccess = `ultimo accesso ${currentMoment}`, 6000);
                    return this.contacts[this.dinamicIndex].messages.push(obj);
                }
            },


            selfAnswer(){
                
                let d = new Date();
                let currentDate = d.toLocaleDateString();
                let currentHour = dayjs().format('H:mm');
                let currentMoment = currentDate + currentHour;

                this.lastAccess = "Online";
                
                let obj = {
                    date: currentMoment,
                    message: 'ok',
                    status: 'received'
                }
                return this.contacts[this.dinamicIndex].messages.push(obj);
            },

            filterName() {
                
                this.contacts.forEach((element, index) => {

                    let minName = element.name.toLowerCase();

                    if(minName.includes(this.nameSearch.toLowerCase())){
                        return element.visible = true;
                    }else{
                        return element.visible = false;
                    }
    
                    
                })
              },

            deleteMessage(parametro, index){
                if(parametro.length < 1){
                    parametro.splice(0,1);
                }
                parametro.splice(index, 1);

                console.log(`this is parametro`, parametro)
            },

        },
    }
)