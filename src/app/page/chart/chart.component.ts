import {Component, OnInit} from '@angular/core';
const DATA = [
	{rank: 1, name: 'Kareem', surname: 'Abdul-Jabbar', points: 38387},
	{rank: 2, name: 'Karl', surname: 'Malone', points: 36928},
	{rank: 3, name: 'Kobe', surname: 'Bryant', points: 33643},
	{rank: 4, name: 'Michael', surname: 'Jordan', points: 32292},
	{rank: 5, name: 'Wilt', surname: 'Chamberlain', points: 31419},
	{rank: 5, name: 'Wilt', surname: 'Chamberlain', points: 31419},
	{rank: 5, name: 'Wilt', surname: 'Chamberlain', points: 31419},
	{rank: 5, name: 'Wilt', surname: 'Chamberlain', points: 31419},
	{rank: 5, name: 'Wilt', surname: 'Chamberlain', points: 31419},
	{rank: 5, name: 'Wilt', surname: 'Chamberlain', points: 31419},
];
@Component({
	selector: 'chart-component',
	templateUrl: './chart.component.html',
	styleUrls: ['./chart.component.css']
})

export class ChartComponent implements OnInit {
	data = DATA;

	ngOnInit (): void {
	}

}