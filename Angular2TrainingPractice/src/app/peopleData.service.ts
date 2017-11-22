import { Injectable } from '@angular/core';

@Injectable()

export class PeopleDataService  {
    private goodPeople = [
        {
            name: "Barack Obama",
            yearBorn: "1961"
        },
        {
            name: "N Modi",
            yearBorn: "1950"
        }
    ];
    getAllGoodPeople() {
        return this.goodPeople;
    }
}