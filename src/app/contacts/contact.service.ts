import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IContact } from "./contact";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class ContactService {
    private contactUrl='api/contacts/contacts.json'

    constructor(private http:HttpClient){}
    getContacts(): IContact[]{
        return [
            {
                "contactId": 1,
                "contactName": "Simona Loperfido",
                "Email": "simona.loperfido@avanade.com",
                "PhoneNumber": 232344883
            },
            {
                "contactId": 2,
                "contactName": "Karanjit Kaur",
                "Email": "karanjit.kaur@avanade.com",
                "PhoneNumber": 313444233
            },
            {
                "contactId": 3,
                "contactName": "Antonio Musella",
                "Email": "antonio.musella@avanade.com",
                "PhoneNumber": 123456789
            }, 
            {
                "contactId": 4,
                "contactName": "Barbara Maran",
                "Email": "barbara.maran@avanade.com",
                "PhoneNumber": 987654321
            },
            {
                "contactId": 5,
                "contactName": "Giulia Draghi",
                "Email": "giulia.draghi@avanade.com",
                "PhoneNumber": 789456123
            },
            {
                "contactId": 6,
                "contactName": "Alexandru Gabriel Ouatu",
                "Email": "alexandru.ouatu@avanade.com",
                "PhoneNumber": 123456789
            },
            {
                "contactId": 7,
                "contactName": "Ilaria Bonelli",
                "Email": "ilaria.bonelli@avanade.com",
                "PhoneNumber": 232344883
            },
            {
                "contactId": 8,
                "contactName": "Graziella Caputo",
                "Email": "graziella.caputo@avanade.com",
                "PhoneNumber": 313444233
            },
            {
                "contactId": 9,
                "contactName": "Elvira Vereggia",
                "Email": "elvira.vereggia@avanade.com",
                "PhoneNumber": 313444233
            }
        ]
        ;
        
        //this.http.get<IContact[]>(this.contactUrl);
    }
}