import {
    getFirestore,
    collection,
    doc,
    setDoc,
    addDoc,
    getDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    // query,
    // where,
    Firestore,
    CollectionReference,
    DocumentReference,
    DocumentSnapshot,
    QuerySnapshot
} from 'firebase/firestore';
import app from "@/app/lib/firebase";

const db: Firestore = getFirestore(app);

// Interface pour les paramètres de requête
export interface QueryParams<T= unknown> {
    field: string;
    operator: string;
    value: T;
}

// Interface pour le résultat générique
export interface DocumentResult<T= unknown> {
    id: T;
    [key: string]: T;
}

/**
 * Fonction générique pour les opérations CRUD sur Firestore
 * @param operation - Type d'opération ('create', 'read', 'update', 'delete', 'getAll', 'query')
 * @param collectionName - Nom de la collection
 * @param data - Données pour create/update
 * @param docId - ID du document (optionnel pour create)
 // * @param queryParams - Paramètres de requête {field, operator, value} (pour l'opération 'query')
 * @returns Promise<DocumentResult | DocumentResult[] | null>
 */
export async function firebaseCRUD<T= Record<string, unknown>>(
    operation: 'create' | 'read' | 'update' | 'delete' | 'getAll' | 'query',
    collectionName: string,
    data: { [key: string]: T } | null = null,
    docId: string | null = null,
    // queryParams: QueryParams | null = null
): Promise<DocumentResult | DocumentResult[] | null> {
    const collectionRef: CollectionReference = collection(db, collectionName);

    try {
        switch (operation) {
            case 'create':
                // Créer un document avec ID personnalisé ou auto-généré
                if (docId) {
                    const docRef: DocumentReference = doc(db, collectionName, docId);
                    await setDoc(docRef, data!);
                    return { id: docId, ...data! };
                } else {
                    const docRef = await addDoc(collectionRef, data!);
                    return { id: docRef.id, ...data! };
                }

            case 'read':
                // Lire un document spécifique
                if (!docId) throw new Error("ID du document requis pour l'opération de lecture");
                const docRef: DocumentReference = doc(db, collectionName, docId);
                const docSnap: DocumentSnapshot = await getDoc(docRef);

                if (docSnap.exists()) {
                    return { id: docSnap.id, ...docSnap.data() };
                } else {
                    return null; // Document n'existe pas
                }

            case 'update':
                // Mettre à jour un document
                if (!docId) throw new Error("ID du document requis pour l'opération de mise à jour");
                const updateRef: DocumentReference = doc(db, collectionName, docId);
                await updateDoc(updateRef, data!);
                return { id: docId, ...data! };

            case 'delete':
                // Supprimer un document
                if (!docId) throw new Error("ID du document requis pour l'opération de suppression");
                const deleteRef: DocumentReference = doc(db, collectionName, docId);
                await deleteDoc(deleteRef);
                return { id: docId, deleted: true };

            case 'getAll':
                // Récupérer tous les documents d'une collection
                console.log('Get all');
                const querySnapshot: QuerySnapshot = await getDocs(collectionRef);
                const documents: DocumentResult[] = [];
                querySnapshot.forEach((doc) => {
                    documents.push({ id: doc.id, ...doc.data() });
                });
                return documents;

            case 'query':
                // Faire une requête avec des filtres
                // if (!queryParams || !queryParams.field || !queryParams.operator || queryParams.value === undefined) {
                //     throw new Error("Paramètres de requête incomplets");
                // }
                //
                // const q = query(
                //     collectionRef,
                //     where(queryParams.field, queryParams.operator, queryParams.value)
                // );
                //
                // const querySnap: QuerySnapshot = await getDocs(q);
                // const queryResults: DocumentResult[] = [];
                // querySnap.forEach((doc) => {
                //     queryResults.push({ id: doc.id, ...doc.data() });
                // });
                // return queryResults;

            default:
                throw new Error(`Opération non supportée: ${operation}`);
        }
    } catch (error) {
        console.error(`Erreur lors de l'opération ${operation}:`, error);
        throw error;
    }
}