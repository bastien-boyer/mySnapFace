import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({ providedIn: 'root' })
export class FaceSnapService {

    faceSnapArray: FaceSnap[] = [{
        title: "Bouvier bernois",
        description: "le meilleur chien du monde",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Bernese_Mountain_DogMiedzynarodowa_wystawa_psow_rasowych_rybnik_kamien_pazdziernik_2011_18.jpg/1024px-Bernese_Mountain_DogMiedzynarodowa_wystawa_psow_rasowych_rybnik_kamien_pazdziernik_2011_18.jpg",
        createdDate: new Date(),
        like: 249,
        localisation: 'Montpellier',
        id: 1
    },
    {
        title: "Chat européen",
        description: "Ca fait miaou",
        imageUrl: "https://tractive.com/blog/wp-content/uploads/2022/04/chat-tigre-patrouillant-son-territoire.jpg",
        createdDate: new Date(),
        like: 190,
        localisation: 'Paris',
        id: 2
    },
    {
        title: "Un zebre",
        description: "L'ancetre du code barres",
        imageUrl: "https://www.lepal.com/uploads/media/default/0001/02/3c2d814ab072db6f5532f34db0b13f0996b3a756.jpeg",
        createdDate: new Date(),
        like: 60,
        id: 3
    },
    {
        title: "Un gateau",
        description: "Miam !",
        imageUrl: "https://www.albal.fr/portal/pics/recette-gateau-napolitain-facile_teaser-min.jpg",
        createdDate: new Date(),
        like: 30,
        id: 4
    },
    {
        title: "Chambord",
        description: "La royauté me va si bien",
        imageUrl: "https://france3-regions.francetvinfo.fr/image/jQ6PwHeVbupKy2h7WGmUguGv-Lc/1200x675/regions/2020/06/09/5edf23c854964_jardins-chambord-drone_portrait-1-2953325.jpg",
        createdDate: new Date(),
        like: 156,
        id: 5
        },
    {
        title: "La mer",
        description: "Kiffer la wave !",
        imageUrl: "https://humer-lagamme.fr/wp-content/uploads/2019/01/eaumer-mobile.jpg",
        createdDate: new Date(),
        like: 44,
        id: 6
        }
    ];
    getFaceSnapArray(): FaceSnap[] {
        return this.faceSnapArray;
    }

    getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnapArray.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap) {
            throw new Error('FaceSnap not found');
        }
        else {
            return faceSnap;
        }
    }

    likeOrUnlikeById(faceSnapId: number, likeType: 'like' | 'unlike'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        likeType === 'like' ? faceSnap.like++ : faceSnap.like--;
    }

}