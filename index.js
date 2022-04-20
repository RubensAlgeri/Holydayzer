import express from 'express';
import cors from 'cors'

const app = express();
app.use(cors())

const holidays = [
    { date: "01/01/2022", name: "Confraternização mundial" },
    { date: "01/03/2022", name: "Carnaval" },
    { date: "17/04/2022", name: "Páscoa" },
    { date: "21/04/2022", name: "Tiradentes" },
    { date: "01/05/2022", name: "Dia do trabalho" },
    { date: "16/06/2022", name: "Corpus Christi" },
    { date: "07/09/2022", name: "Independência do Brasil" },
    { date: "12/10/2022", name: "Nossa Senhora Aparecida" },
    { date: "02/11/2022", name: "Finados" },
    { date: "15/11/2022", name: "Proclamação da República" },
    { date: "25/12/2022", name: "Natal" }
];
const hoje = new Date().toLocaleDateString();

app.get('/holydays', (req, res) => {
    res.send(holidays);
});

app.get('/holydays/:month', (req, res) => {
    const id = req.params.month;
    let mesSelecionado = holidays.filter(mes => {
        return mes.date.slice(3, 5) == id.padStart(2, '0');
    })
    res.send(mesSelecionado);
});

app.get('/is-today-holiday', (req, res) => {
    for (let i = 0; i < holidays.length; i++) {
        if (hoje == holidays[i].date) {
            res.send(`Sim, hoje é ${holidays[i].name}`);
        }
    }
    res.send(`Não, hoje não é feriado`);
});

app.listen(5000);