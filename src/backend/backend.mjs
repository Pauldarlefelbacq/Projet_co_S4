import Pocketbase from 'pocketbase';
const pb = new PocketBase('http://localhost:8090');

export async function getAllProjets() {
    return await pb.collection('Projets').getFullList();
};

export async function getProjet(id) {
    return await pb.collection('Projets').getOne(id);
};