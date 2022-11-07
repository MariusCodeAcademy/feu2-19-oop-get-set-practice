## WorkingPerson

1. prideti getteri fullName. kuris grazintu "Vardas Pavarde"
2. panaudoti fullName vietoj email main.js

## WorkersList 

1. sukurti klase WorkersList.
2. klase turi list savybe kuri iniciuuojama i tuscia masyva
3. prideti metoda addWorker. Metodas priima argumentu gauta objekta ir ideda ji i list jei tai yra pagal Freelancer arba Employee sukurtas objektas.
4. prideti metoda addWorkerArray kuri prideda visa gauta masyva i list. jei tai yra pagal Freelancer arba Employee sukurtu objektu masyvas.
5. padaryti kad list masyvas butu privatus. Sukurti getteri kuri grazina visa masyva.

## JobList

1. sukurti klase JobList.
2. klase turi privacia savybe list
3. klase turi metoda addJob(). Kuris prideda darba i list. jei tai yra paga Job klase sukurtas darbas.
4. sukurti metoda showJobs() kuri atvaizduoja visus darbus.

## Job

1. kiekviena kartu sukurian darba prideti jam didejanti id. pvz j_1, j_2, j_3 ir tt
2. jobListe sukurti metoda kuris grazina darbo objekta pagal jo id.

## GenHtml

1. sukurti kase GenHtml. 
2. klase turi statini metoda generatePeople(arr, dest), kuris is gauto masyvo i dest sugeneruoja rikiuota sarasa. arr yra Freelancer arba Employee masyvas.
3. klase turi statini metoda generatePeopleTable(arr, dest). is gauto arr masyvo sugeneruoja lentele. Lenteleje turi stulpelius: fullname, worker, employee. Priklausomai nuo darbuotojo tipo, stupleliuose worker, employee generuojam "X".


## bendras funkcionalumas

1. perrasom esama main.js, panaudodami WorkersList, JobList. 
2. panaudoami GenHtml sugeneruojam darbuotojus i sarasa html.
3. panaudoami GenHtml sugeneruojam darbuotojus i lentele html.