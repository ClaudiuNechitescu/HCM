/**
 * @namespace flexygo.culture.dede
 */
var flexygo;
(function (flexygo) {
    var culture;
    (function (culture) {
        var dede;
        (function (dede) {
            dede.process = {
                executing: 'Prozess wird ausgeführt...',
            };
            dede.dependecymanager = {
                sort: 'Sortieren',
                valuedep: 'Wert ab',
                classdep: 'Klasse',
                combodep: 'Entpackbar',
                enabledep: 'Aktiviert',
                visibledep: 'Sichtbar',
                requireddep: 'Erforderlich',
                CustomProperty: 'Benutzerdefinierte Eigenschaft',
                save: 'Speichern',
                addmore: 'Fügen sie weitere abhängige Eigenschaften hinzu',
                sqlvalue: 'SQL Wert',
                sqlclass: 'SQL Klasse',
                sqlcombofilter: 'SQL Filter für Entpackbares',
                sqlcombosentence: 'SQL für Entpackbares',
                enabledvalues: 'Aktivierte Werte',
                disabledvalues: 'Deaktivierte Werte',
                sqlenabledsentence: 'SQL Aktivierter Satz',
                visiblevalues: 'Sichtbare Werte',
                hiddenvalues: 'Unsichtbare Werte',
                visiblesentence: 'SQL Sichtbarer Satz',
                requiredvalues: 'Erforderliche Werte',
                notrequiredvalues: 'Nicht Erforderliche Werte',
                requiredsentence: 'SQL Erforderlicher Satz',
                description: 'Beschreibung',
                valueApply: 'Betroffenen Werte',
                CusPropertyName: 'Name des benutzerdefinierten Steuerelements',
                SQLCustomProperty: 'Benutzerdefinierte SQL-Eigenschaft',
                connectionstrings: 'Verbindungszeichenfolgen',
                connStringvalues: 'Verbindungszeichenfolgen',
                relateddep: 'Verwandte abhängigkeiten'
            };
            dede.develop = {
                developer: 'Entwickler',
                adminarea: 'Admin Bereich',
                help: 'Hilfe',
                dependencymanager: 'Abhängigkeits Manager',
                filtermanager: 'Filter Manager',
                modulemanager: 'Modul Manager',
                nodemanager: 'Knoten Manager',
                settings: 'Einstellungen',
                wizard: 'Assistent',
                editproperties: 'Eigenschaften bearbeiten',
                modules: 'Module',
                collection: 'Sammlung',
                page: 'Seite',
                object: 'Objekt',
                imagemanager: 'Bildeinstellungen',
                documentmanager: 'Dokumenteinstellungen',
                mailmanager: 'E-Mail-Einstellungen',
                viewobject: 'Objekt ansehen',
                security: 'Sicherheit',
                objectsecurity: 'Objekt Sicherheit',
                objectprocesssecurity: 'Objekt Prozesssicherheit',
                selectobject: 'Bitte wählen Sie eine Seite mit einem Objekt aus',
                objectpropertysecurity: 'Eigenschaftssicherheit',
                pageSettings: 'Seiteneinstellung',
                chatter: 'Chatter',
                users: 'Benutzer',
                roles: 'Rollen',
            };
            dede.history = {
                historyempty: 'Navigationsverlauf leer',
                showmore: 'Mehr anzeigen',
            };
            dede.msg = {
                confirm: 'Bestätigen',
                fieldrequired: 'Benötigtes Feld',
                copied: 'Kopiert',
            };
            dede.navigation = {
                relatedobjects: 'Verwandte Objekte',
                reports: 'Berichte',
                noelements: 'Keine existierenden Elemente',
                popupwarning: 'Pop-up Windows blockiert vom Browser. Bitte ändern sie die Einstellungen.'
            };
            dede.flxfilter = {
                searchplaceholder: 'Suche nach: ',
                showall: 'Zeig alles',
            };
            dede.flxkanban = {
                addCard: 'Hinzufügen',
            };
            dede.flxarea = {
                noprocesses: 'Keine Prozesse',
                clickexpand: 'Klicken Sie, um Prozesse zu erweitern/zu reduzieren',
            };
            dede.flxedit = {
                addfields: 'Feld hinzufügen',
                selectall: 'Alles auswählen',
                selectnone: 'Nichts auswählen',
                createwarning: 'Bitte wählen Sie mindestens ein Feld.',
                appendwarning: 'Bitte wählen Sie ein Feldtyp und ein Feldnamen.',
                createfields: 'Feld erstellen',
                enterfieldname: 'Feld Name',
                selecttype: 'Wählen Sie einen Dateityp',
                seedependencies: 'Zeige Abhängigkeit',
                templates: 'Vorlagen',
                objectsettings: 'Objekt Einstellung',
                label: 'Etikette',
                style: 'Stil',
                classname: 'Klassenname',
                selecticon: 'Wählen Sie ein Symbol',
                selectcontroltype: 'Wählen Sie einen Kontrolltyp',
                locked: 'Verschlossen',
                required: 'Erforderlich',
                hidden: 'Versteckt',
                addseparatora: 'Fügen Sie Separator oben hinzu',
                addseparatorb: 'Fügen Sie Separator unten hinzu',
                addplaceholder: 'Fügen Sie einen Platzhalter hinzu',
                save: 'Speichern',
                close: 'Schliessen',
                areyousuretitle: 'Ungespeicherte Änderungen',
                areyousuremsg: 'Wollen Sie wirklich diese Seite schliessen?',
                areyousuremsgyes: 'Ja',
                areyousuremsgno: 'Nein',
                emptyproperty: 'Leere Eigenschaft',
                addproperties: 'Eigenschaften hinzufügen',
                propertyname: 'Feldname',
                propertylabel: 'Feldbezeichnung',
                adddetachedproperty: 'Nicht verbundenes Feld hinzufügen',
                selecttable: 'Wählen Sie Tabelle',
                loadmore: 'Scrollen Sie, um mehr zu laden',
                hasdependencies: 'Startet Abhängigkeiten',
                hasdependingproperties: 'Von Abhängigkeiten betroffen'
            };
            dede.flxeditgrid = {
                addrow: 'Zeile hinzufügen',
                removeselection: 'Auswahl löschen',
                hide: 'Verbergen',
                settings: 'Einstellungen',
                deleteconfirm: 'Wollen Sie alle ausgewählten Elemente löschen?',
                startinfo: 'Sie müssen zuerst das editgrid konfigurieren',
            };
            dede.flxgipe = {
                butonadd: 'Hinzufügen',
                buttonload: 'Laden',
                buttonsave: 'Speichern',
                buttoncancel: 'Abbrechen',
                dialogloadtitle: 'Arbeitsablauf laden',
                dialogsavetitle: 'Arbeitsablauf speichern',
                dialogpropertiestitle: 'Eigenschaften',
                dialogtemplatetitle: 'Vorlage wählen',
                dialogdebugtitle: 'Debug ausführen',
                errornoworkflowselected: 'Bitte wählen Sie einen Arbeitsablauf zum laden aus',
                errornoversionselected: 'Bitte wählen Sie eine Arbeitsablauf Version',
                confirmunsavedchanges: 'Sie haben ungespeicherte Änderungen. Wirklich Fortfahren?',
                labelarea: 'Bereich:',
                labelmodule: 'Modul:',
                labelname: 'Name:',
                labeldescrip: 'Beschreibung:',
                labelversion: 'Version:',
                labeltop: 'Position X:',
                labelleft: 'Position Y:',
                labelheight: 'Höhe:',
                labelwidth: 'Länge:',
                labellabel: 'Etikette:',
                labelobject: 'Objekt:',
                labelprocess: 'Prozess:',
                labelworkflow: 'Arbeitsablauf:',
                labeldecission: 'Entscheidung:',
                labelevent: 'Event:',
                labelactive: 'Aktiv:',
                labelstatus: 'Status:',
                labelresult: 'Ergebnis:',
                labelerrormessage: 'Fehlermeldung:',
                labelrelations: 'Parameterbeziehungen:',
                labeloutputparams: 'Ausgabe Parameter:',
                labelbackgroundcolor: 'Hintergrundfarbe:',
                labelbordercolor: 'Randfarbe:',
                labeltextcolor: 'Textfarbe:',
                treeinnode: 'Eingabe Parameter:',
                treeoutnode: 'Ausgabe Parameter:',
                workflowareaplaceholder: 'Bereich wählen...',
                workfloworiginplaceholder: 'Herkunft wählen...',
                workflowmoduleplaceholder: 'Modul wählen...',
                workflownameplaceholder: 'Namen eingeben...',
                workflowversionplaceholder: 'Version wählen...',
                searchtemplates: 'In Vorlagen suchen...',
                editorprocess: 'Prozess',
                editorobject: 'Objekt',
                editordecission: 'Entscheidung',
                editorevent: 'Event',
                editorworkflow: 'Arbeitsablauf',
                editorlabel: 'Etikette',
                editortoggleall: 'Alle wählen / Alle abwählen',
                editortoolbar: {
                    new: 'Neu',
                    open: 'Öffnen',
                    save: 'Speichern',
                    generate: 'Generieren',
                    up: 'Oben',
                    down: 'Unten',
                    run: 'Ausführen',
                    debug: 'Debug',
                    select: 'Auswählen',
                    pan: 'bewegen',
                    undo: 'Rückgängig',
                    redo: 'Wiederherstellen',
                    cut: 'Schneiden',
                    copy: 'Kopieren',
                    paste: 'Einfügen',
                    delete: 'Löschen',
                    group: 'Gruppieren',
                    ungroup: 'Degruppieren',
                    workflow: 'Arbeitsablauf',
                    object: 'Objekt',
                    process: 'Prozess',
                    decission: 'Entscheidung',
                    event: 'Event',
                    connect: 'Verbindung',
                    fit: 'Anpassen',
                    zoomin: 'Reinzoomen',
                    zoomout: 'Rauszoomen',
                    actualsize: 'Aktuelle Grösse',
                    templates: 'Vorlagen',
                    label: 'Etikette',
                    properties: 'Eigenschaften',
                },
                messages: {
                    savefirst: 'Speichern Sie zuerst die Grafik, um den Arbeitsablauf zu generieren',
                    workflowgenerated: 'Arbeitsablauf erfolgreich generiert',
                    workflowsaved: 'Arbeitsablauf erfolgreich gespeichert',
                },
                popupmenu: {
                    workflowproperties: 'Arbeitsablauf Eigenschaften',
                    view: 'Anzeigen',
                    properties: 'Eigenschaften',
                    enter: 'Eingeben',
                    new: 'Neu',
                    listparams: 'Parameter anzeigen',
                }
            };
            dede.filtermanager = {
                choosefilter: 'Filter wählen',
                objectname: 'Objekt',
                filtertype: 'Filter Typ',
                properties: 'Eigenschaften',
                fields: 'Felder',
                unsaved: 'Es sind ungespeicherte Änderungen vorhanden. Fortfahren?',
                sure: 'Sind Sie sicher?',
                add: 'Hinzufügen',
                errornofilter: 'Bitte fügen Sie zuerst einen neuen Filter hinzu.',
                errornofields: 'Bitte fügen Sie zuerst einige Felder hinzu.',
                save: 'Speichern',
                delete: 'Löschen',
            };
            dede.sortmanager = {
                sort: 'Sortieren',
                fields: 'Felder',
                apply: 'Sich bewerben',
                clean: 'Reinigen',
                groups: 'Gruppierungen',
                applied: 'Appliqué'
            };
            dede.flxlist = {
                noentriesfound: 'Keine Einträge gefunden.',
                warning: 'Das Modul hat keine Vorlage, aber eine spezifische HTML-Zeichenfolge im Modul. Moduleinstellungen anzeigen.',
                currentfiltervalues: 'Aktuelle Filterwerte speichern.',
                removecurrentfiltervalues: 'Bestätigen, um die ausgewählten Filterwerte zu entfernen.',
                name: 'Name',
                generic: 'Generisch',
                savefilter: 'Filterwerte speichern',
                selectfilterfirst: 'Bitte wählen Sie zuerst einen Filter',
                save: 'Speichern',
            };
            dede.flxmail = {
                nomails: 'Keine E-Mails gefunden ',
                nosettings: 'Ihr E-Mail-Konto wurde nicht eingerichtet. Klicken Sie hier, um es zu konfigurieren.',
                loadmore: 'Mehr laden ',
                folders: 'Ordner',
                address: 'Adresse',
                subject: 'Angelegenheit',
                body: 'Körper',
                mindate: 'Mindestdatum',
                maxdate: 'Maximales Datum',
                unseen: 'Nur nicht lesen',
                sync: 'Synchronisieren',
                waitsync: 'Warten Sie, bis die Synchronisierung abgeschlossen ist.',
                nomail: 'Mail nicht gefunden.',
                nomailalert: 'Die Mail wurde nicht auf dem Server gefunden.',
            };
            dede.flxmodule = {
                delete: 'Löschen',
                save: 'Speichern',
                new: 'Neu',
                edit: 'Bearbeiten',
                view: 'Anzeigen',
                print: 'Drucken',
                printpage: 'Seite drucken',
                printmodule: 'Druckmodul',
                help: 'Hilfe',
                settings: 'Einstellungen',
                process: 'Prozess',
                report: 'Bericht',
                export: 'Exportieren',
                back: 'Zurück',
                unknown: 'Unbekannte Funktion',
                templates: 'Vorlagen',
                noprop: 'Modul ohne Eigenschaften.',
                requiredsaving: 'Vervollständigen Sie alle benötigten Felder vor dem Speichern. Wie :',
                noparams: 'Keine Parameter zum wiederherstellen vorhanden.',
                requiredrunning: 'Vervollständigen Sie alle benötigten Felder bevor Sie einen Prozess starten.',
                requiredreport: 'Vervollständigen Sie alle benötigten Felder bevor Sie den Bericht öffnen.',
                deleted: 'Gelöscht :)',
                saved: 'Gespeichert :)',
                uniqueBagError: 'Nicht definiertes eindeutiges Bezeichnerfeld.',
                nofieldBagError: 'Kan veld <b>{0}</b> niet vinden. Voeg het toe om te vragen of de selectieknop te verwijderen.',
                noItemsSelected: 'Wählen Sie zuerst ein Element aus der Liste aus.',
            };
            dede.flxnav = {
                notimplemented: 'Aktionsknoten nicht implementiert',
                pIdNotespecified: 'Prozess ID nicht spezifiziert',
                urlnotespecified: 'Url nicht spezifiziert',
                autoSQlnovalidtype: 'Auto Generate SQL ist kein gültiger Knotentyp',
                webcomponentnotspecified: 'Web Komponent nicht spezifiziert.',
                helpidnotspecified: 'Hilfe ID nicht spezifiziert',
            };
            dede.image = {
                browsebutton: 'Suchen',
                browsebuttontooltip: 'Sie können ein Bild suchen oder per reinziehen einfügen',
                savebutton: 'Speichern',
                removebutton: 'Löschen',
                cropbutton: 'Ausschneiden',
                movebutton: 'Bewegen',
                zoombutton: 'Zoom',
                rotatebutton: 'Rotieren',
                scalebutton: 'Skala',
                aspectratiobutton: 'Seitenverhältnis',
                resetbutton: 'Rückgängig',
                downloadbutton: 'herunterladen',
                free: 'Frei',
                errorfiletype: 'Nur Bilder werden akzeptiert',
                errorfilenumber: 'Nur ein Bild wird akzeptiert',
                infotostart: 'Suchen oder ziehen Sie ein bild hinein um zu starten',
                errorfilename: 'Das Bild hat keinen Namen',
                errorrootpath: 'Wurzelpfad',
                extension: 'Dateierweiterung nicht akzeptiert.',
            };
            dede.documentmanager = {
                upload: 'Hochladen',
                info: 'Suchen oder ziehen Sie Dokumente hinein',
                saved: 'Gespeichert',
                save: 'Speichern',
                return: 'Zurück',
                removed: 'Gelöscht',
                errorsaving: 'Speicher Fehler',
                errorremoving: 'Lösch Fehler',
                copy: 'In Zwischenablage kopieren',
                preview: 'Vorschau',
                edit: 'Bearbeiten',
                remove: 'Löschen',
                disk: 'Disk',
                diskfiles: 'Dateien',
                diskfolders: 'Ordner',
                drive: 'Drive',
                dropbox: 'Dropbox',
                download: 'Download',
                link: 'Link',
                filter: 'Filter',
                folderorfile: 'Ordner oder Datei',
                browsernotsupported: 'Ihr Browser wird nicht unterstützt',
                settings: 'Einstellungen',
                permissionerror: 'Entschuldigung, Sie haben keine Berechtigung',
                documentempty: 'Dokument leer',
                view: 'sehen',
                downloadall: 'Alle Dokumente herunterladen',
                nodocuments: 'Keine Dokumente zum Herunterladen',
                msgremove: 'Weet u zeker dat u het document wilt verwijderen?',
                sendselection: 'Auswahl per E-Mail senden',
                noselection: 'Keine Dokumente ausgewählt',
            };
            dede.imagemanager = {
                upload: 'Hochladen',
                settings: 'Einstellungen',
                msgremove: 'Sind Sie sicher das Bild zu entfernen ?',
                msgremoveall: 'Möchten Sie wirklich ALLE Bilder entfernen?',
                removed: 'Bild entfernt',
                removedall: 'Alle Bilder wurden entfernt',
                errorremoving: 'Fehler beim bewegen des Bildes',
                uploaded: 'Bild hochgeladen',
                erroruploading: 'Fehler beim Hochladen des Bildes',
                updated: 'Bild aktualisiert',
                errorupdating: 'Fehler beim Aktualisieren des Bildes',
                permissionerror: 'Entschuldigung, Sie haben keine Berechtigung',
                imageepmty: 'Bild leer',
                downloadall: 'Laden Sie alle Bilder herunter',
                deleteall: 'Löschen Sie alle Bilder',
                errordownload: 'Fehler beim Herunterladen von Bildern',
                noimages: 'Es gibt keine Bilder',
            };
            dede.upload = {
                uploaded: 'Hochgeladen',
                error: 'Fehler beim Hochladen',
                info: 'Hineinziehen zum Hochladen',
                extension: 'Dateierweiterung nicht akzeptiert.',
            };
            dede.file = {
                saved: 'Datei gespeichert ;)',
                errorsaving: 'Fehler beim Speichern der Datei :(',
                resultbase64: '1 Datei in base64',
                extension: 'Dateierweiterung nicht akzeptiert.',
            };
            dede._export = {
                success: 'Dateien erfolgreich exportiert ;)',
                error: 'Fehler beim exportieren der Dateien :(',
                exportinglist: 'Export Liste',
                exportlimit: 'Die maximale Anzahl der zu exportierenden Datensätze wurde überschritten, bitte verwenden Sie einen restriktiveren Filter',
            };
            dede.menumanager = {
                deleteMenu: 'Menu löschen',
                deleteMenuquestion: 'Möchten Sie dieses Menü und alle Ihre Kinder wirklich löschen?',
                empty: 'Create a new menu to navigate!',
                menus: 'Menüs',
                new: 'Neu',
                refresh: 'Aktualisierung',
                moreoptions: 'Mehr Optionen',
                delete: 'Löschen',
                edit: 'bearbeiten',
                submenus: 'Untermenüs',
                newsubmenu: 'Neues Untermenü',
            };
            dede.modulemanager = {
                save: 'Speichern',
                searchmodules: 'Module suchen',
                cancel: 'Abbrechen',
                tabid: 'Tab-ID',
                tabtitle: 'Registerkarte Titel',
                tabdescrip: 'Beschreibung',
                selecttabicon: 'Wählen Sie ein Symbol',
                classification: 'Klassifikation',
                addnewtabmodule: 'Neues Tab-Modul hinzufügen',
                changepagerelation: 'ändern der Seitenmodulbeziehung',
                configmodule: 'Einstellungen Module',
                removemodule: 'Modul löschen',
                events: 'Angehängte Events',
                security: 'Modul Sicherheit',
                tabMode: 'Tab modus',
            };
            dede.moduletab = {
                emptytabs: 'Tabs leer',
                nocontent: 'Ohne Ergebnis.',
            };
            dede.nodemanager = {
                save: 'Speichern',
                title: 'Knoten Manager',
                deletenode: 'Knoten löschen',
                deletenodequestion: 'Sind Sie sicher diesen Knoten zu Löschen ?',
                addfields: 'Felder hinzufügen',
            };
            dede.objectmanager = {
                selecticon: 'Wählen Sie ein Symbol',
                validicon: 'Sie müssen einen gültigen Symbolklassennamen eingeben',
                objectname: 'Objekt Name',
                validobjectname: 'Sie müssen einen Objektnamen eingeben',
                objectdescription: 'Objekt Beschreibung',
                validobjectdescription: 'Sie Müssen eine Objektbeschreibung eingeben',
                collectionname: 'Sammlungsname',
                validcollectionname: 'Sie müssen einen Sammlungsnamen eingeben',
                collectiondescription: 'Beschreibung der Sammlung',
                validcollectiondescription: 'Sie müssen eine Sammlungsbeschreibung eingeben',
                datasource: 'Datei Quelle',
                fromtable: 'Aus Tabelle',
                fromview: 'Aus Sicht',
                fromnewtable: 'Aus neuer Tabelle',
                selectcnnstring: 'Von ausgewählten Verbindungszeichenfolge',
                validcnnstring: 'Sie müssen eine gültige Verbindungszeichenfolge eingeben',
                selecttable: 'Ursprung wählen',
                validorigin: 'Sie müssen einen gültigen Ursprung eingeben',
                newtablename: 'Name der neuen Tabelle',
                validnewtablename: 'Sie müssen einen Tabellennamen eingeben',
                viewkeyfields: 'Schlüsselfelder anzeigen',
                validviewkeyfields: 'Sie müssen eine Ansicht Schlüsselfelder eingeben',
                savecontinue: 'Speichern und Fortfahren',
                continue: 'Fortfahren',
                listtemplate: 'Vorlagen Liste',
                edittemplate: 'Vorlagen Bearbeiten',
                viewtemplate: 'Vorlagen anzeigen',
                objectcreated: 'Objekt erstellt',
                selectoption: 'Option wählen',
                listform: 'Zeige das Formular <b> Liste </b> an.',
                editform: 'Zeige das Formular <b> Bearbeiten </b> an.',
                objectconfig: 'Zeige das <b> Objekt </b> Einstellung an.',
                collectionconfig: 'Zeige die <b> Sammlung </b> Einstellung an.',
                showrelations: 'Zeige die <b> Beziehungen  </b> an.',
                saved: 'Gespeichert',
                basicinfo: 'Basis Information',
                objectproperties: 'Eigenschaften',
                listsettings: 'Listen Einstellungen',
                displaysettings: 'Vorlagen',
                end: 'Ende',
                colproperties: 'Bearbeiten Grid Eigenschaften (Optional)',
                save: 'Speichern',
                filtersettings: 'Filter Einstellungen',
            };
            dede.flxpropertymanager = {
                addfields: 'Klicken Sie auf "Felder hinzufügen", um zu starten.',
                label: 'Etikette',
                style: 'Stil',
                classname: 'Klassenname',
                selecticon: 'Wählen Sie ein Symbol',
                selectcontroltype: 'Wählen Sie einen Kontrolltyp aus',
                locked: 'Verschlossen',
                required: 'Erforderlich',
                hidden: 'Versteckt',
                addseparatora: 'Fügen Sie Separator oben hinzu',
                addseparatorb: 'Fügen Sie Separator unten hinzu',
                addplaceholder: 'Platzhalter hinzufügen',
                save: 'Sparen',
                close: 'Schließen',
                hasdefinition: 'Überprüfen Sie die Eigenschaft in der Tabelle:',
            };
            dede.flxversioninfo = {
                currentversion: 'Aktuelle Version ({{CurrentVersion}}).',
                lastversion: 'Letzte Version ({{LastVersion}}).',
                updatedversion: 'Die Anwendung ist aktuell.',
                pendingchanges: 'Änderungen stehen noch aus',
                reviewchanges: 'Ausstehende änderungen anzeigen',
                newupdate: 'Neue Version verfügbar ({{LastVersion}}).',
                update: 'Aktualisieren',
                info: 'Information',
                test: 'Test anzeigen',
                delete: 'Löschen',
                deleting: 'Version Löschen',
                updating: 'Aktualisiere',
                initupdate: 'Initialisiere Aktualisierung...',
                estatusupdatingservice: 'Aktualisations Service...',
                estatuscheckingpackages: 'Prüfung Pakete...',
                estatusdownloadingversion: 'Downloade neue Version...',
                estatusfinished: 'Fertig',
                estatusupdatedatabase: 'Aktualisiere Datenbank',
                estatusupdateiis: 'Aktualiesiere Web Applikation',
                applicationwillreset: 'Die Applikation wird neugestartet...',
                updatesuccessful: 'Aktualisation erfolgreich!',
                oldversion: 'Alte Version ({{VersionNumber}})',
                newversion: 'Neue Version S({{VersionNumber}})',
                confirmupdate: 'Sind Sie sicher die Applikation zu aktualisieren?',
                confirmdelete: 'Sind Sie sicher die Version zu löschen?',
                infotitle: 'Information der Version',
                deletesuccessful: 'Version erfolgreich gelöscht!',
                infoversion: 'Nummer der Version:',
                infopath: 'Virtueller Pfad:',
                infodatabase: 'Datenbank:',
                confirmwarningtitle: 'Warnung!',
                confirmwarninglabel: 'Bitte bestätigen Sie diesen Vorgang:',
                switch: 'Wechseln',
                confirmswitch: 'Sind Sie sicher diese Version zu wehcseln?',
                releasenotes: 'Versions Details',
                oldversionvalue: 'Alter Versionswert',
                customvalue: 'Eigener Wert',
                newversionvalue: 'Neuer Versionswert',
                manualvalue: 'Manueler Wert',
                applychanges: 'änderungen übernehmen',
                nochanges: 'Keine änderungen markiert zum übernehmen',
                changecount: '¿Sind Sie sicher die Änderungen {{count}} zu übernehmen ?',
                applychangessuccesful: 'Änderungen erflogreich übernommen',
            };
            dede.viewmanager = {
                properties: 'Eigenschaften',
                fields: 'Felder',
                unsaved: 'Es sind ungespeicherte Änderungen vorhanden. Fortfahren?',
                add: 'Hinzufügen',
                errornofilter: 'Bitte fügen Sie zuerst eine neue Ansicht hinzu.',
                errornofields: 'Bitte fügen Sie zuerst einige Felder an.',
                errornosql: 'SQL Feld kann nicht leer sein.',
                validate: 'bestätigen',
                errorduplicateprop: 'Feld {0} existiert bereits.',
                save: 'Speichern',
                cancel: 'Abbrechen',
                viewwizard: 'Ansichts-Assistent',
                selectobject: 'Bitte wählen Sie ein Objekt aus',
                openwizard: 'Assistent öffnen',
                saved: 'Gesichert  :)',
            };
            dede.templates = {
                addnewtemplate: 'Vorlage hinzufügen',
            };
            dede.flxscheduler = {
                objects: 'Objekte',
                chooseobjects: 'Objekt wählen',
            };
            dede.flxscheduleryear = {
                january: 'Januar',
                february: 'Februar',
                march: 'März',
                april: 'April',
                may: 'Mai',
                june: 'Juni',
                july: 'Juli',
                august: 'August',
                september: 'September',
                october: 'Oktober',
                november: 'November',
                december: 'Dezember',
                mn: 'Mon',
                tu: 'Die',
                we: 'Mit',
                th: 'Don',
                fr: 'Fri',
                sa: 'Sam',
                su: 'Sun',
            };
            dede.flxsearch = {
                search: 'SearcSuche...',
                pleasewrite: 'Bitte schreibe den zu suchenden Text',
                speak: 'Sprich jetzt...',
                pleaseobject: 'Bitte zuerst ein Objekt auswählen',
                searchnode: 'Suche',
            };
            dede.text = {
                map: 'Klicken Sie auf die Karte',
                errormap: 'Die Adresse wurde nicht gefunden',
                api: 'Google API-Schlüssel wurde nicht gefunden.',
                apihelp: 'Sehen Sie sich unsere Hilfe an, um zu erfahren, wie Sie zu uns gelangen.',
                nophone: 'Eingabe einer Rufnummer',
                nomail: 'Eingabe einer E- Mail Adresse',
            };
            dede.flxfunnel = {
                data: 'Keine Daten',
            };
            dede.flxtimeline = {
                withoutDescription: 'Ohne Beschreibung',
                withoutRegisters: 'Ohne Register',
                hour: 'Stunde',
                today: 'heute',
                day: 'Tag',
                week: 'Woche',
                month: 'Monat',
                year: 'Jahr',
                navigation: 'Navigation',
                range: 'Angebot',
                title: 'HILFE & SHORTCUTS',
                description: 'Beschreibung',
                action: 'Aktion',
                selectitem: 'Menüpunkt wählen',
                multiselectitems: 'Mehrfachauswahl von Elementen',
                multiselectbyrange: 'Mehrfachauswahl von Artikeln nach Zeitbereich',
                multiselectbyrangegroup: 'Mehrfachauswahl von Elementen nach Zeitbereich in einer Gruppe',
                createitem: 'Artikel erstellen',
                createitemwithrange: 'Artikel mit Bereich erstellen',
                edititem: 'Element bearbeiten',
                openeditview: 'Bearbeitungsansicht öffnen',
                zoom: 'Zeitbereich ändern',
                navigationtime: 'Navigation in der Zeit',
                or: 'o',
                to: 'zu',
                withoutpercentage: 'Ohne Prozentsatz',
                notsupported: 'Bildschirmgröße wird nicht unterstützt',
            };
            dede.flxfilebrowser = {
                saved: 'Gespeichert',
                errorsaving: 'Speicher Fehler',
                errorremoving: 'Lösch Fehler',
                permissionerror: 'Entschuldigung, Sie haben keine Berechtigung',
                documentempty: 'Dokument leer',
                itemsselected: 'elemente ausgewählt',
                emptyfolder: 'Der Ordner leer ist',
                existingfiles: 'Einige Dateien existieren auf Server',
                overwritefiles: 'Sind Sie sicher, dass Sie sie überschreiben?',
                deleting: 'Löschen',
                items: 'Artikel',
                sure: 'Bist du sicher?',
                currentfolder: 'Aktueller Ordner',
                uploadfiles: 'Daten hochladen',
                addfolder: 'Ordner hinzufügen',
                download: 'Herunterladen',
                delete: 'Löschen',
                goback: 'Geh zurück',
                processingdownload: 'Verarbeitung herunterladen',
            };
            dede.chatter = {
                composerplaceholder: 'Schreibe etwas',
                sendbutton: 'Registrieren',
                startinfo: 'Sie müssen zuerst das chatter konfigurieren',
                deleteconfirm: '¿Sind Sie sicher, die Nachricht zu löschen?',
                saveButton: 'Speichern',
            };
            dede.offline = {
                createobjecttitle: 'Fügen Sie der App ein neues Objekt hinzu',
                createobjectcontent: 'Sie können ein neues Objekt erstellen oder auf einem vorhandenen aufbauen',
                createobjectbuttonnew: 'Neuer Artikel',
                createobjectbuttonbased: 'Objektbasiert',
                enablewebapiconfirmation: 'Um die Offline- Anwendung zu verwenden, müssen Sie das WebApi aktivieren und die Anwendung neu starten.Möchten Sie die Anwendung jetzt neu starten?',
            };
            dede.offlineemulator = {
                ios: 'IOS-Modus umschalten',
                md: 'Android-Modus umschalten',
            };
            dede.combobuilder = {
                datasource: 'Datenquelle',
                fromtable: 'Tabelle',
                fromview: 'Ansicht',
                selectcnnstring: 'Wählen Sie die Verbindungszeichenfolge aus',
                validcnnstring: 'Sie müssen eine Verbindungszeichenfolge auswählen',
                selecttable: 'Eine Quelle auswählen',
                validorigin: 'Geben Sie eine gültige Quelle an',
                viewkeyfields: 'Schlüsselfelder anzeigen',
                saved: 'Gerettet',
                save: 'Speichern',
                cancel: 'Abbrechen',
                selectvaluefield: 'Wählen Sie das zu speichernde Feld aus',
                selectdisplayfield: 'Wählen Sie das Feld, das angezeigt werden soll',
                selectadditionalfield: 'Zusätzliche Felder auswählen',
                selectorderfield: 'Wählen Sie das Feld aus, um die Ergebnisse zu sortieren',
                comboassistant: 'Assistent',
                cnnstring: 'Verbindungszeichenfolge',
                origin: 'Herkunft',
                sqlsentence: 'SQL-Anweisung',
                valuefield: 'Zu speicherndes Feld',
                displayfield: 'Anzuzeigendes Feld',
                additionalfield: 'Zusätzliche Felder',
                orderfield: 'Zu sortierendes Feld',
                validvaluefield: 'Geben Sie ein zu speicherndes Feld an',
                validdisplayfield: 'Geben Sie ein Feld zur Anzeige an',
                validorderfield: 'Geben Sie ein Feld zum Sortieren an',
                validsqlsentence: 'SQL-Anweisung ist ungültig',
            };
            dede.formatsmanager = {
                formatassistant: 'Assistent',
                field: 'Feld',
                selectfield: 'Feld auswählen',
                validfield: 'Gültiges Feld auswählen',
                validformat: 'Gültiges Format auswählen',
                selectformat: 'Formattyp auswählen',
                formattype: 'Formattyp',
                saved: 'Gespeichert',
                nosaved: 'Es wurde kein Format gespeichert',
                decimal: 'Dezimalformat',
                isdate: 'Datumsformat',
                translate: 'Satz übersetzen',
                save: 'Speichern',
                cancel: 'Abbrechen',
                casetrue: 'Fall wahr',
                casefalse: 'Fall falsch',
                boolformat: 'Boolean format',
                isnull: 'Wert ist null',
                numdecimals: 'Anzahl der Nachkommastellen',
                switchformat: 'Schaltformat',
                casenotnull: 'Wert ist nicht null',
                stringformat: 'Formatierender String',
                stringtype: 'String-Format-Typ',
                validstringformat: 'Wähle gültigen String-Format-Typ',
                uppercase: 'Grossbuchstaben',
                lowercase: 'Kleinbuchstaben',
                characternumber: 'Anzahl der anzuzeigenden Zeichen',
                addoption: 'Option hinzufügen',
                addelse: 'Standardoption hinzufügen',
                dateformat: 'Datumsformattyp',
                selectdateformat: 'Datumsformat-Typ auswählen',
                validdateformat: 'Gültigen Datumsformat-Typ auswählen',
                dateLT: '19:05',
                dateLTS: '19:05:57 ',
                dateL: '13.07.2021',
                datel: '13.7.2021',
                dateLL: '13. Juli 2021',
                datell: '13. Jul. 2021',
                dateLLL: '13.07.2021 19:05',
                datelll: 'Jul 13, 2021 19:05',
                dateLLLL: 'Dienstag, 13. Juli 2021 19:05',
                datellll: 'Di., Jul 13 2021 19:05 ',
                translatesentence: 'Zu übersetzender Satz',
                option: 'Option',
                result: 'Ergebnis',
                elseoption: 'Standard-Option',
            };
        })(dede = culture.dede || (culture.dede = {}));
    })(culture = flexygo.culture || (flexygo.culture = {}));
})(flexygo || (flexygo = {}));
//# sourceMappingURL=language-dede.js.map