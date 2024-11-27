export type Noms = {
    id: string; // The ID, mapped to "_id" in the database, as an ObjectId
    ortho: string; // The written form of the word
    phon?: string | null; // Phonetic transcription (optional)
    lemme: string; // The lemma (canonical form) of the word
    cgram: string; // Grammatical category
    genre?: string | null; // Gender (e.g., 'f' or 'm')
    nombre?: string | null; // Number (e.g., 's' or 'p')
    freqlemfilms2?: number | null; // Lemma frequency in films
    freqlemlivres?: number | null; // Lemma frequency in books
    freqfilms2?: number | null; // Word frequency in films
    freqlivres?: number | null; // Word frequency in books
    infover?: string | null; // Verb-specific information
    nbhomogr?: number | null; // Number of homographs
    nbhomoph?: number | null; // Number of homophones
    islem: number; // Indicates if the word is a lemma (1 = true, 0 = false)
    nblettres: number; // Number of letters in the word
    nbphons?: number | null; // Number of phonemes
    cvcv?: string | null; // CV structure (e.g., CVCV or CCVCV)
    p_cvcv?: string | null; // Simplified phonetic pattern
    voisorth?: number | null; // Orthographic neighborhood
    voisphon?: number | null; // Phonetic neighborhood
    puorth?: number | null; // Orthographic strength
    puphon?: number | null; // Phonetic strength
    syll?: string | null; // Syllabification
    nbsyll?: number | null; // Number of syllables
    cv_cv?: string | null; // Syllabic structure
    orthrenv?: string | null; // Reversed orthography
    phonrenv?: string | null; // Reversed phonetics
    orthosyll?: string | null; // Orthography broken into syllables
    cgramortho?: string | null; // Orthographic grammatical category
    deflem?: number | null; // Lemma definition
    defobs?: number | null; // Observed definition
    old20?: number | null; // Orthographic Levenshtein Distance (OLD20)
    pld20?: number | null; // Phonetic Levenshtein Distance (PLD20)
    morphoder?: string | null; // Morphological derivation
    nbmorph?: number | null; // Number of morphemes
};
