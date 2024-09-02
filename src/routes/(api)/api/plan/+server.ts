import { createApiWrapper } from '$lib/server/api/api';
import { decodeCredentials } from '$lib/server/api/credentials';
import { error, type NumericRange } from '@sveltejs/kit';
import { PlanNotFoundError, RequestFailedError } from 'indiware-api';
import { Logger, type ILogObj } from 'tslog';
import type { RequestHandler } from './$types';

const log: Logger<ILogObj> = new Logger();

export const GET: RequestHandler = async ({ request, url }) => {
	const api = createApiWrapper(decodeCredentials(request));
	const date = url.searchParams.get('date');

	log.info(`GET /api/plan/${date ? `?date=${date}` : ''}`);

	try {
		const plan = await api.fetchSubstitutionPlan(date ? new Date(date) : undefined);
		return new Response(`{
      "date": "2024-09-02T22:00:00.000Z",
      "lastUpdated": "2024-09-02T09:33:00.000Z",
      "daysPerWeek": 5,
      "week": 1,
      "holidays": [
        "2024-07-31T22:00:00.000Z",
        "2024-08-01T22:00:00.000Z",
        "2024-10-02T22:00:00.000Z",
        "2024-10-06T22:00:00.000Z",
        "2024-10-07T22:00:00.000Z",
        "2024-10-08T22:00:00.000Z",
        "2024-10-09T22:00:00.000Z",
        "2024-10-10T22:00:00.000Z",
        "2024-10-13T22:00:00.000Z",
        "2024-10-14T22:00:00.000Z",
        "2024-10-15T22:00:00.000Z",
        "2024-10-16T22:00:00.000Z",
        "2024-10-17T22:00:00.000Z",
        "2024-10-30T23:00:00.000Z",
        "2024-11-19T23:00:00.000Z",
        "2024-12-22T23:00:00.000Z",
        "2024-12-23T23:00:00.000Z",
        "2024-12-24T23:00:00.000Z",
        "2024-12-25T23:00:00.000Z",
        "2024-12-26T23:00:00.000Z",
        "2024-12-29T23:00:00.000Z",
        "2024-12-30T23:00:00.000Z",
        "2024-12-31T23:00:00.000Z",
        "2025-01-01T23:00:00.000Z",
        "2025-01-02T23:00:00.000Z",
        "2025-02-16T23:00:00.000Z",
        "2025-02-17T23:00:00.000Z",
        "2025-02-18T23:00:00.000Z",
        "2025-02-19T23:00:00.000Z",
        "2025-02-20T23:00:00.000Z",
        "2025-02-23T23:00:00.000Z",
        "2025-02-24T23:00:00.000Z",
        "2025-02-25T23:00:00.000Z",
        "2025-02-26T23:00:00.000Z",
        "2025-02-27T23:00:00.000Z",
        "2025-04-17T22:00:00.000Z",
        "2025-04-20T22:00:00.000Z",
        "2025-04-21T22:00:00.000Z",
        "2025-04-22T22:00:00.000Z",
        "2025-04-23T22:00:00.000Z",
        "2025-04-24T22:00:00.000Z",
        "2025-04-30T22:00:00.000Z",
        "2025-05-27T22:00:00.000Z",
        "2025-05-28T22:00:00.000Z",
        "2025-05-29T22:00:00.000Z",
        "2025-06-08T22:00:00.000Z",
        "2025-06-29T22:00:00.000Z",
        "2025-06-30T22:00:00.000Z",
        "2025-07-01T22:00:00.000Z",
        "2025-07-02T22:00:00.000Z",
        "2025-07-03T22:00:00.000Z",
        "2025-07-06T22:00:00.000Z",
        "2025-07-07T22:00:00.000Z",
        "2025-07-08T22:00:00.000Z",
        "2025-07-09T22:00:00.000Z",
        "2025-07-10T22:00:00.000Z",
        "2025-07-13T22:00:00.000Z",
        "2025-07-14T22:00:00.000Z",
        "2025-07-15T22:00:00.000Z",
        "2025-07-16T22:00:00.000Z",
        "2025-07-17T22:00:00.000Z",
        "2025-07-20T22:00:00.000Z",
        "2025-07-21T22:00:00.000Z",
        "2025-07-22T22:00:00.000Z",
        "2025-07-23T22:00:00.000Z",
        "2025-07-24T22:00:00.000Z",
        "2025-07-27T22:00:00.000Z",
        "2025-07-28T22:00:00.000Z",
        "2025-07-29T22:00:00.000Z",
        "2025-07-30T22:00:00.000Z"
      ],
      "schoolClasses": [
        {
          "name": "5a",
          "type": "schoolClass",
          "timetable": [
            {
              "id": 2,
              "name": "EN",
              "subject": "EN",
              "group": null,
              "teacher": "Scl"
            },
            {
              "id": 3,
              "name": "MU",
              "subject": "MU",
              "group": null,
              "teacher": "Scö"
            },
            {
              "id": 4,
              "name": "KU",
              "subject": "KU",
              "group": null,
              "teacher": "Süm"
            },
            {
              "id": 17,
              "name": "ETH (ETH-5ad)",
              "subject": "ETH",
              "group": "ETH-5ad",
              "teacher": "Zin"
            },
            {
              "id": 16,
              "name": "REk (Rek-st5)",
              "subject": "REk",
              "group": "Rek-st5",
              "teacher": "Lüb"
            },
            {
              "id": 7,
              "name": "MA",
              "subject": "MA",
              "group": null,
              "teacher": "Kok"
            },
            {
              "id": 8,
              "name": "DE",
              "subject": "DE",
              "group": null,
              "teacher": "Pau"
            },
            {
              "id": 15,
              "name": "REe (Ree-st5)",
              "subject": "REe",
              "group": "Ree-st5",
              "teacher": "Bru"
            },
            {
              "id": 14,
              "name": "SPO",
              "subject": "SPO",
              "group": null,
              "teacher": "BoM"
            },
            {
              "id": 11,
              "name": "BIO",
              "subject": "BIO",
              "group": null,
              "teacher": "HoK"
            },
            {
              "id": 12,
              "name": "GE",
              "subject": "GE",
              "group": null,
              "teacher": "Mar"
            },
            {
              "id": 13,
              "name": "GEO",
              "subject": "GEO",
              "group": null,
              "teacher": "Lin"
            },
            {
              "id": 22,
              "name": "FlIn",
              "subject": "FlIn",
              "group": null,
              "teacher": "Vet"
            },
            {
              "id": 23,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "Lien"
            },
            {
              "id": 793,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Küh"
            },
            {
              "id": 38,
              "name": "FlIn",
              "subject": "FlIn",
              "group": null,
              "teacher": "Bru"
            },
            {
              "id": 792,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "HoM"
            },
            {
              "id": 50,
              "name": "FlIn",
              "subject": "FlIn",
              "group": null,
              "teacher": "Wil"
            },
            {
              "id": 791,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Bis"
            },
            {
              "id": 72,
              "name": "KOM",
              "subject": "KOM",
              "group": null,
              "teacher": "Scö"
            },
            {
              "id": 76,
              "name": "MU",
              "subject": "MU",
              "group": null,
              "teacher": "Scö"
            },
            {
              "id": 77,
              "name": "INST",
              "subject": "INST",
              "group": null,
              "teacher": "Paw"
            },
            {
              "id": 794,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Zac"
            },
            {
              "id": 790,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Zac"
            },
            {
              "id": 789,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Bän"
            },
            {
              "id": 460,
              "name": "TC (TC-5a-2)",
              "subject": "TC",
              "group": "TC-5a-2",
              "teacher": "SeC"
            },
            {
              "id": 461,
              "name": "TC (TC-5a-1)",
              "subject": "TC",
              "group": "TC-5a-1",
              "teacher": "Hän"
            },
            {
              "id": 472,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "Völk"
            },
            {
              "id": 473,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "Züc"
            },
            {
              "id": 474,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "Ble"
            },
            {
              "id": 475,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "Kue"
            },
            {
              "id": 476,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "BoM"
            },
            {
              "id": 477,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "Paw"
            },
            {
              "id": 478,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Bän"
            },
            {
              "id": 480,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Bis"
            },
            {
              "id": 481,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "HoM"
            },
            {
              "id": 482,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Küh"
            },
            {
              "id": 483,
              "name": "FlIn",
              "subject": "FlIn",
              "group": null,
              "teacher": "The"
            },
            {
              "id": 594,
              "name": "Jazz",
              "subject": "Jazz",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 726,
              "name": "AG J",
              "subject": "AG J",
              "group": null,
              "teacher": "Paw"
            },
            {
              "id": 727,
              "name": "AGTö",
              "subject": "AGTö",
              "group": null,
              "teacher": null
            },
            {
              "id": 718,
              "name": "AGThe",
              "subject": "AGThe",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 719,
              "name": "AG Gi",
              "subject": "AG Gi",
              "group": null,
              "teacher": "Kno"
            },
            {
              "id": 720,
              "name": "AG SV",
              "subject": "AG SV",
              "group": null,
              "teacher": "Ebe"
            },
            {
              "id": 721,
              "name": "AG V",
              "subject": "AG V",
              "group": null,
              "teacher": "Göb"
            },
            {
              "id": 723,
              "name": "AG S",
              "subject": "AG S",
              "group": null,
              "teacher": "Vet"
            },
            {
              "id": 724,
              "name": "AG Fi",
              "subject": "AG Fi",
              "group": null,
              "teacher": "Lien"
            },
            {
              "id": 801,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Gast"
            },
            {
              "id": 802,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Gast"
            },
            {
              "id": -1,
              "name": "ETH-5ad",
              "subject": "ETH-5ad",
              "teacher": "Zin"
            },
            {
              "id": -1,
              "name": "Ree-st5",
              "subject": "Ree-st5",
              "teacher": "Bru"
            },
            {
              "id": -1,
              "name": "Rek-st5",
              "subject": "Rek-st5",
              "teacher": "Lüb"
            },
            {
              "id": -1,
              "name": "TC-5a-1",
              "subject": "TC-5a-1",
              "teacher": "Hän"
            },
            {
              "id": -1,
              "name": "TC-5a-2",
              "subject": "TC-5a-2",
              "teacher": "SeC"
            }
          ],
          "courses": [
            { "subject": "ETH-5ad", "teacher": "Zin" },
            { "subject": "Ree-st5", "teacher": "Bru" },
            { "subject": "Rek-st5", "teacher": "Lüb" },
            { "subject": "TC-5a-1", "teacher": "Hän" },
            { "subject": "TC-5a-2", "teacher": "SeC" }
          ],
          "lessons": [
            {
              "id": 2,
              "name": "EN",
              "subject": "EN",
              "group": null,
              "teacher": "Scl"
            },
            {
              "id": 3,
              "name": "MU",
              "subject": "MU",
              "group": null,
              "teacher": "Scö"
            },
            {
              "id": 4,
              "name": "KU",
              "subject": "KU",
              "group": null,
              "teacher": "Süm"
            },
            {
              "id": 17,
              "name": "ETH (ETH-5ad)",
              "subject": "ETH",
              "group": "ETH-5ad",
              "teacher": "Zin"
            },
            {
              "id": 16,
              "name": "REk (Rek-st5)",
              "subject": "REk",
              "group": "Rek-st5",
              "teacher": "Lüb"
            },
            {
              "id": 7,
              "name": "MA",
              "subject": "MA",
              "group": null,
              "teacher": "Kok"
            },
            {
              "id": 8,
              "name": "DE",
              "subject": "DE",
              "group": null,
              "teacher": "Pau"
            },
            {
              "id": 15,
              "name": "REe (Ree-st5)",
              "subject": "REe",
              "group": "Ree-st5",
              "teacher": "Bru"
            },
            {
              "id": 14,
              "name": "SPO",
              "subject": "SPO",
              "group": null,
              "teacher": "BoM"
            },
            {
              "id": 11,
              "name": "BIO",
              "subject": "BIO",
              "group": null,
              "teacher": "HoK"
            },
            {
              "id": 12,
              "name": "GE",
              "subject": "GE",
              "group": null,
              "teacher": "Mar"
            },
            {
              "id": 13,
              "name": "GEO",
              "subject": "GEO",
              "group": null,
              "teacher": "Lin"
            },
            {
              "id": 22,
              "name": "FlIn",
              "subject": "FlIn",
              "group": null,
              "teacher": "Vet"
            },
            {
              "id": 23,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "Lien"
            },
            {
              "id": 793,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Küh"
            },
            {
              "id": 38,
              "name": "FlIn",
              "subject": "FlIn",
              "group": null,
              "teacher": "Bru"
            },
            {
              "id": 792,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "HoM"
            },
            {
              "id": 50,
              "name": "FlIn",
              "subject": "FlIn",
              "group": null,
              "teacher": "Wil"
            },
            {
              "id": 791,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Bis"
            },
            {
              "id": 72,
              "name": "KOM",
              "subject": "KOM",
              "group": null,
              "teacher": "Scö"
            },
            {
              "id": 76,
              "name": "MU",
              "subject": "MU",
              "group": null,
              "teacher": "Scö"
            },
            {
              "id": 77,
              "name": "INST",
              "subject": "INST",
              "group": null,
              "teacher": "Paw"
            },
            {
              "id": 794,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Zac"
            },
            {
              "id": 790,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Zac"
            },
            {
              "id": 789,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Bän"
            },
            {
              "id": 460,
              "name": "TC (TC-5a-2)",
              "subject": "TC",
              "group": "TC-5a-2",
              "teacher": "SeC"
            },
            {
              "id": 461,
              "name": "TC (TC-5a-1)",
              "subject": "TC",
              "group": "TC-5a-1",
              "teacher": "Hän"
            },
            {
              "id": 472,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "Völk"
            },
            {
              "id": 473,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "Züc"
            },
            {
              "id": 474,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "Ble"
            },
            {
              "id": 475,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "Kue"
            },
            {
              "id": 476,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "BoM"
            },
            {
              "id": 477,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "Paw"
            },
            {
              "id": 478,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Bän"
            },
            {
              "id": 480,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Bis"
            },
            {
              "id": 481,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "HoM"
            },
            {
              "id": 482,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Küh"
            },
            {
              "id": 483,
              "name": "FlIn",
              "subject": "FlIn",
              "group": null,
              "teacher": "The"
            },
            {
              "id": 594,
              "name": "Jazz",
              "subject": "Jazz",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 726,
              "name": "AG J",
              "subject": "AG J",
              "group": null,
              "teacher": "Paw"
            },
            {
              "id": 727,
              "name": "AGTö",
              "subject": "AGTö",
              "group": null,
              "teacher": null
            },
            {
              "id": 718,
              "name": "AGThe",
              "subject": "AGThe",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 719,
              "name": "AG Gi",
              "subject": "AG Gi",
              "group": null,
              "teacher": "Kno"
            },
            {
              "id": 720,
              "name": "AG SV",
              "subject": "AG SV",
              "group": null,
              "teacher": "Ebe"
            },
            {
              "id": 721,
              "name": "AG V",
              "subject": "AG V",
              "group": null,
              "teacher": "Göb"
            },
            {
              "id": 723,
              "name": "AG S",
              "subject": "AG S",
              "group": null,
              "teacher": "Vet"
            },
            {
              "id": 724,
              "name": "AG Fi",
              "subject": "AG Fi",
              "group": null,
              "teacher": "Lien"
            },
            {
              "id": 801,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Gast"
            },
            {
              "id": 802,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Gast"
            }
          ],
          "plannedLessons": [
            {
              "id": 11,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "BIO" },
              "teacher": { "changed": false, "value": "HoK" },
              "room": { "changed": false, "value": "E0.18" },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 7,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Kok" },
              "room": { "changed": false, "value": "E1.07" },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 2,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "EN" },
              "teacher": { "changed": false, "value": "Scl" },
              "room": { "changed": false, "value": "E1.07" },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 23,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Lien" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 472,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Völk" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 473,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Züc" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 474,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Ble" },
              "room": { "changed": false, "value": "TH 1" },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 475,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Kue" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 476,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "BoM" },
              "room": { "changed": false, "value": "KUFA" },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 477,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Paw" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 482,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Küh" },
              "room": { "changed": false, "value": "E2.16" },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 789,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Bän" },
              "room": { "changed": false, "value": "A0.16" },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 792,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "HoM" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 794,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Zac" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 791,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Bis" },
              "room": { "changed": true, "value": "S1.15" },
              "schoolClass": "5a",
              "info": "Raum geändert"
            },
            {
              "id": 23,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Lien" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 472,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Völk" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 473,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Züc" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 474,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Ble" },
              "room": { "changed": false, "value": "TH 1" },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 475,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Kue" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 476,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "BoM" },
              "room": { "changed": false, "value": "KUFA" },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 477,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Paw" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 482,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Küh" },
              "room": { "changed": false, "value": "E2.16" },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 789,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Bän" },
              "room": { "changed": false, "value": "A0.16" },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 792,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "HoM" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 794,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Zac" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 791,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Bis" },
              "room": { "changed": true, "value": "S1.15" },
              "schoolClass": "5a",
              "info": "Raum geändert"
            },
            {
              "id": 8,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "Pau" },
              "room": { "changed": false, "value": "E1.07" },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 721,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "AG V" },
              "teacher": { "changed": false, "value": "Göb" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 723,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "AG S" },
              "teacher": { "changed": false, "value": "Vet" },
              "room": { "changed": false, "value": "E1.15" },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 721,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "AG V" },
              "teacher": { "changed": false, "value": "Göb" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 723,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "AG S" },
              "teacher": { "changed": false, "value": "Vet" },
              "room": { "changed": false, "value": "E1.15" },
              "schoolClass": "5a",
              "info": null
            }
          ]
        },
        {
          "name": "5b",
          "type": "schoolClass",
          "timetable": [
            {
              "id": 15,
              "name": "REe (Ree-st5)",
              "subject": "REe",
              "group": "Ree-st5",
              "teacher": "Bru"
            },
            {
              "id": 22,
              "name": "FlIn",
              "subject": "FlIn",
              "group": null,
              "teacher": "Vet"
            },
            {
              "id": 23,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "Lien"
            },
            {
              "id": 24,
              "name": "TC (TC-5b-2)",
              "subject": "TC",
              "group": "TC-5b-2",
              "teacher": "BoM"
            },
            {
              "id": 25,
              "name": "EN",
              "subject": "EN",
              "group": null,
              "teacher": "Kle"
            },
            {
              "id": 26,
              "name": "MU",
              "subject": "MU",
              "group": null,
              "teacher": "Bän"
            },
            {
              "id": 27,
              "name": "KU",
              "subject": "KU",
              "group": null,
              "teacher": "Kön"
            },
            {
              "id": 28,
              "name": "ETH (ETH-5bc)",
              "subject": "ETH",
              "group": "ETH-5bc",
              "teacher": "Zin"
            },
            {
              "id": 793,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Küh"
            },
            {
              "id": 30,
              "name": "MA",
              "subject": "MA",
              "group": null,
              "teacher": "Kok"
            },
            {
              "id": 31,
              "name": "DE",
              "subject": "DE",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 38,
              "name": "FlIn",
              "subject": "FlIn",
              "group": null,
              "teacher": "Bru"
            },
            {
              "id": 33,
              "name": "SPO",
              "subject": "SPO",
              "group": null,
              "teacher": "BoM"
            },
            {
              "id": 34,
              "name": "BIO",
              "subject": "BIO",
              "group": null,
              "teacher": "HoK"
            },
            {
              "id": 35,
              "name": "GE",
              "subject": "GE",
              "group": null,
              "teacher": "Kle"
            },
            {
              "id": 36,
              "name": "GEO",
              "subject": "GEO",
              "group": null,
              "teacher": "Lin"
            },
            {
              "id": 792,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "HoM"
            },
            {
              "id": 50,
              "name": "FlIn",
              "subject": "FlIn",
              "group": null,
              "teacher": "Wil"
            },
            {
              "id": 791,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Bis"
            },
            {
              "id": 73,
              "name": "KOM",
              "subject": "KOM",
              "group": null,
              "teacher": "Kle"
            },
            {
              "id": 794,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Zac"
            },
            {
              "id": 790,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Zac"
            },
            {
              "id": 789,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Bän"
            },
            {
              "id": 462,
              "name": "TC (TC-5b-1)",
              "subject": "TC",
              "group": "TC-5b-1",
              "teacher": "Hän"
            },
            {
              "id": 472,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "Völk"
            },
            {
              "id": 473,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "Züc"
            },
            {
              "id": 474,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "Ble"
            },
            {
              "id": 475,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "Kue"
            },
            {
              "id": 476,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "BoM"
            },
            {
              "id": 477,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "Paw"
            },
            {
              "id": 478,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Bän"
            },
            {
              "id": 480,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Bis"
            },
            {
              "id": 481,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "HoM"
            },
            {
              "id": 482,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Küh"
            },
            {
              "id": 483,
              "name": "FlIn",
              "subject": "FlIn",
              "group": null,
              "teacher": "The"
            },
            {
              "id": 594,
              "name": "Jazz",
              "subject": "Jazz",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 727,
              "name": "AGTö",
              "subject": "AGTö",
              "group": null,
              "teacher": null
            },
            {
              "id": 718,
              "name": "AGThe",
              "subject": "AGThe",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 719,
              "name": "AG Gi",
              "subject": "AG Gi",
              "group": null,
              "teacher": "Kno"
            },
            {
              "id": 720,
              "name": "AG SV",
              "subject": "AG SV",
              "group": null,
              "teacher": "Ebe"
            },
            {
              "id": 721,
              "name": "AG V",
              "subject": "AG V",
              "group": null,
              "teacher": "Göb"
            },
            {
              "id": 723,
              "name": "AG S",
              "subject": "AG S",
              "group": null,
              "teacher": "Vet"
            },
            {
              "id": 724,
              "name": "AG Fi",
              "subject": "AG Fi",
              "group": null,
              "teacher": "Lien"
            },
            {
              "id": 801,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Gast"
            },
            {
              "id": 802,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Gast"
            },
            {
              "id": -1,
              "name": "ETH-5bc",
              "subject": "ETH-5bc",
              "teacher": "Zin"
            },
            {
              "id": -1,
              "name": "Ree-st5",
              "subject": "Ree-st5",
              "teacher": "Bru"
            },
            {
              "id": -1,
              "name": "TC-5b-1",
              "subject": "TC-5b-1",
              "teacher": "Hän"
            },
            {
              "id": -1,
              "name": "TC-5b-2",
              "subject": "TC-5b-2",
              "teacher": "BoM"
            }
          ],
          "courses": [
            { "subject": "ETH-5bc", "teacher": "Zin" },
            { "subject": "Ree-st5", "teacher": "Bru" },
            { "subject": "TC-5b-1", "teacher": "Hän" },
            { "subject": "TC-5b-2", "teacher": "BoM" }
          ],
          "lessons": [
            {
              "id": 15,
              "name": "REe (Ree-st5)",
              "subject": "REe",
              "group": "Ree-st5",
              "teacher": "Bru"
            },
            {
              "id": 22,
              "name": "FlIn",
              "subject": "FlIn",
              "group": null,
              "teacher": "Vet"
            },
            {
              "id": 23,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "Lien"
            },
            {
              "id": 24,
              "name": "TC (TC-5b-2)",
              "subject": "TC",
              "group": "TC-5b-2",
              "teacher": "BoM"
            },
            {
              "id": 25,
              "name": "EN",
              "subject": "EN",
              "group": null,
              "teacher": "Kle"
            },
            {
              "id": 26,
              "name": "MU",
              "subject": "MU",
              "group": null,
              "teacher": "Bän"
            },
            {
              "id": 27,
              "name": "KU",
              "subject": "KU",
              "group": null,
              "teacher": "Kön"
            },
            {
              "id": 28,
              "name": "ETH (ETH-5bc)",
              "subject": "ETH",
              "group": "ETH-5bc",
              "teacher": "Zin"
            },
            {
              "id": 793,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Küh"
            },
            {
              "id": 30,
              "name": "MA",
              "subject": "MA",
              "group": null,
              "teacher": "Kok"
            },
            {
              "id": 31,
              "name": "DE",
              "subject": "DE",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 38,
              "name": "FlIn",
              "subject": "FlIn",
              "group": null,
              "teacher": "Bru"
            },
            {
              "id": 33,
              "name": "SPO",
              "subject": "SPO",
              "group": null,
              "teacher": "BoM"
            },
            {
              "id": 34,
              "name": "BIO",
              "subject": "BIO",
              "group": null,
              "teacher": "HoK"
            },
            {
              "id": 35,
              "name": "GE",
              "subject": "GE",
              "group": null,
              "teacher": "Kle"
            },
            {
              "id": 36,
              "name": "GEO",
              "subject": "GEO",
              "group": null,
              "teacher": "Lin"
            },
            {
              "id": 792,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "HoM"
            },
            {
              "id": 50,
              "name": "FlIn",
              "subject": "FlIn",
              "group": null,
              "teacher": "Wil"
            },
            {
              "id": 791,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Bis"
            },
            {
              "id": 73,
              "name": "KOM",
              "subject": "KOM",
              "group": null,
              "teacher": "Kle"
            },
            {
              "id": 794,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Zac"
            },
            {
              "id": 790,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Zac"
            },
            {
              "id": 789,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Bän"
            },
            {
              "id": 462,
              "name": "TC (TC-5b-1)",
              "subject": "TC",
              "group": "TC-5b-1",
              "teacher": "Hän"
            },
            {
              "id": 472,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "Völk"
            },
            {
              "id": 473,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "Züc"
            },
            {
              "id": 474,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "Ble"
            },
            {
              "id": 475,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "Kue"
            },
            {
              "id": 476,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "BoM"
            },
            {
              "id": 477,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "Paw"
            },
            {
              "id": 478,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Bän"
            },
            {
              "id": 480,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Bis"
            },
            {
              "id": 481,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "HoM"
            },
            {
              "id": 482,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Küh"
            },
            {
              "id": 483,
              "name": "FlIn",
              "subject": "FlIn",
              "group": null,
              "teacher": "The"
            },
            {
              "id": 594,
              "name": "Jazz",
              "subject": "Jazz",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 727,
              "name": "AGTö",
              "subject": "AGTö",
              "group": null,
              "teacher": null
            },
            {
              "id": 718,
              "name": "AGThe",
              "subject": "AGThe",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 719,
              "name": "AG Gi",
              "subject": "AG Gi",
              "group": null,
              "teacher": "Kno"
            },
            {
              "id": 720,
              "name": "AG SV",
              "subject": "AG SV",
              "group": null,
              "teacher": "Ebe"
            },
            {
              "id": 721,
              "name": "AG V",
              "subject": "AG V",
              "group": null,
              "teacher": "Göb"
            },
            {
              "id": 723,
              "name": "AG S",
              "subject": "AG S",
              "group": null,
              "teacher": "Vet"
            },
            {
              "id": 724,
              "name": "AG Fi",
              "subject": "AG Fi",
              "group": null,
              "teacher": "Lien"
            },
            {
              "id": 801,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Gast"
            },
            {
              "id": 802,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Gast"
            }
          ],
          "plannedLessons": [
            {
              "id": 26,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "MU" },
              "teacher": { "changed": false, "value": "Bän" },
              "room": { "changed": false, "value": "S1.17" },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 31,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "BoI" },
              "room": { "changed": false, "value": "E1.08" },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 30,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Kok" },
              "room": { "changed": false, "value": "E1.08" },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 23,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Lien" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 472,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Völk" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 473,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Züc" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 474,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Ble" },
              "room": { "changed": false, "value": "TH 1" },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 475,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Kue" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 476,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "BoM" },
              "room": { "changed": false, "value": "KUFA" },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 477,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Paw" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 482,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Küh" },
              "room": { "changed": false, "value": "E2.16" },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 789,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Bän" },
              "room": { "changed": false, "value": "A0.16" },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 792,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "HoM" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 794,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Zac" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 791,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Bis" },
              "room": { "changed": true, "value": "S1.15" },
              "schoolClass": "5b",
              "info": "Raum geändert"
            },
            {
              "id": 23,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Lien" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 472,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Völk" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 473,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Züc" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 474,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Ble" },
              "room": { "changed": false, "value": "TH 1" },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 475,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Kue" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 476,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "BoM" },
              "room": { "changed": false, "value": "KUFA" },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 477,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Paw" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 482,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Küh" },
              "room": { "changed": false, "value": "E2.16" },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 789,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Bän" },
              "room": { "changed": false, "value": "A0.16" },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 792,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "HoM" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 794,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Zac" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 791,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Bis" },
              "room": { "changed": true, "value": "S1.15" },
              "schoolClass": "5b",
              "info": "Raum geändert"
            },
            {
              "id": 25,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "EN" },
              "teacher": { "changed": false, "value": "Kle" },
              "room": { "changed": false, "value": "E1.08" },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 721,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "AG V" },
              "teacher": { "changed": false, "value": "Göb" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 723,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "AG S" },
              "teacher": { "changed": false, "value": "Vet" },
              "room": { "changed": false, "value": "E1.15" },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 721,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "AG V" },
              "teacher": { "changed": false, "value": "Göb" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 723,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "AG S" },
              "teacher": { "changed": false, "value": "Vet" },
              "room": { "changed": false, "value": "E1.15" },
              "schoolClass": "5b",
              "info": null
            }
          ]
        },
        {
          "name": "5c",
          "type": "schoolClass",
          "timetable": [
            {
              "id": 16,
              "name": "REk (Rek-st5)",
              "subject": "REk",
              "group": "Rek-st5",
              "teacher": "Lüb"
            },
            {
              "id": 15,
              "name": "REe (Ree-st5)",
              "subject": "REe",
              "group": "Ree-st5",
              "teacher": "Bru"
            },
            {
              "id": 22,
              "name": "FlIn",
              "subject": "FlIn",
              "group": null,
              "teacher": "Vet"
            },
            {
              "id": 23,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "Lien"
            },
            {
              "id": 28,
              "name": "ETH (ETH-5bc)",
              "subject": "ETH",
              "group": "ETH-5bc",
              "teacher": "Zin"
            },
            {
              "id": 793,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Küh"
            },
            {
              "id": 38,
              "name": "FlIn",
              "subject": "FlIn",
              "group": null,
              "teacher": "Bru"
            },
            {
              "id": 54,
              "name": "GEO",
              "subject": "GEO",
              "group": null,
              "teacher": "Sch"
            },
            {
              "id": 55,
              "name": "TC (TC-5c-1)",
              "subject": "TC",
              "group": "TC-5c-1",
              "teacher": "SeC"
            },
            {
              "id": 43,
              "name": "EN",
              "subject": "EN",
              "group": null,
              "teacher": "Bet"
            },
            {
              "id": 44,
              "name": "MU",
              "subject": "MU",
              "group": null,
              "teacher": "Paw"
            },
            {
              "id": 45,
              "name": "KU",
              "subject": "KU",
              "group": null,
              "teacher": "Kön"
            },
            {
              "id": 792,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "HoM"
            },
            {
              "id": 48,
              "name": "MA",
              "subject": "MA",
              "group": null,
              "teacher": "Gie"
            },
            {
              "id": 49,
              "name": "DE",
              "subject": "DE",
              "group": null,
              "teacher": "Wil"
            },
            {
              "id": 50,
              "name": "FlIn",
              "subject": "FlIn",
              "group": null,
              "teacher": "Wil"
            },
            {
              "id": 51,
              "name": "SPO",
              "subject": "SPO",
              "group": null,
              "teacher": "Mel"
            },
            {
              "id": 52,
              "name": "BIO",
              "subject": "BIO",
              "group": null,
              "teacher": "HoK"
            },
            {
              "id": 53,
              "name": "GE",
              "subject": "GE",
              "group": null,
              "teacher": "Mar"
            },
            {
              "id": 791,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Bis"
            },
            {
              "id": 74,
              "name": "KOM",
              "subject": "KOM",
              "group": null,
              "teacher": "Gie"
            },
            {
              "id": 794,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Zac"
            },
            {
              "id": 790,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Zac"
            },
            {
              "id": 789,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Bän"
            },
            {
              "id": 464,
              "name": "TC (TC-5c-2)",
              "subject": "TC",
              "group": "TC-5c-2",
              "teacher": "Hän"
            },
            {
              "id": 472,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "Völk"
            },
            {
              "id": 473,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "Züc"
            },
            {
              "id": 474,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "Ble"
            },
            {
              "id": 475,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "Kue"
            },
            {
              "id": 476,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "BoM"
            },
            {
              "id": 477,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "Paw"
            },
            {
              "id": 478,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Bän"
            },
            {
              "id": 480,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Bis"
            },
            {
              "id": 481,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "HoM"
            },
            {
              "id": 482,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Küh"
            },
            {
              "id": 483,
              "name": "FlIn",
              "subject": "FlIn",
              "group": null,
              "teacher": "The"
            },
            {
              "id": 594,
              "name": "Jazz",
              "subject": "Jazz",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 727,
              "name": "AGTö",
              "subject": "AGTö",
              "group": null,
              "teacher": null
            },
            {
              "id": 718,
              "name": "AGThe",
              "subject": "AGThe",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 719,
              "name": "AG Gi",
              "subject": "AG Gi",
              "group": null,
              "teacher": "Kno"
            },
            {
              "id": 720,
              "name": "AG SV",
              "subject": "AG SV",
              "group": null,
              "teacher": "Ebe"
            },
            {
              "id": 721,
              "name": "AG V",
              "subject": "AG V",
              "group": null,
              "teacher": "Göb"
            },
            {
              "id": 723,
              "name": "AG S",
              "subject": "AG S",
              "group": null,
              "teacher": "Vet"
            },
            {
              "id": 724,
              "name": "AG Fi",
              "subject": "AG Fi",
              "group": null,
              "teacher": "Lien"
            },
            {
              "id": 801,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Gast"
            },
            {
              "id": 802,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Gast"
            },
            {
              "id": -1,
              "name": "ETH-5bc",
              "subject": "ETH-5bc",
              "teacher": "Zin"
            },
            {
              "id": -1,
              "name": "Ree-st5",
              "subject": "Ree-st5",
              "teacher": "Bru"
            },
            {
              "id": -1,
              "name": "Rek-st5",
              "subject": "Rek-st5",
              "teacher": "Lüb"
            },
            {
              "id": -1,
              "name": "TC-5c-1",
              "subject": "TC-5c-1",
              "teacher": "SeC"
            },
            {
              "id": -1,
              "name": "TC-5c-2",
              "subject": "TC-5c-2",
              "teacher": "Hän"
            }
          ],
          "courses": [
            { "subject": "ETH-5bc", "teacher": "Zin" },
            { "subject": "Ree-st5", "teacher": "Bru" },
            { "subject": "Rek-st5", "teacher": "Lüb" },
            { "subject": "TC-5c-1", "teacher": "SeC" },
            { "subject": "TC-5c-2", "teacher": "Hän" }
          ],
          "lessons": [
            {
              "id": 16,
              "name": "REk (Rek-st5)",
              "subject": "REk",
              "group": "Rek-st5",
              "teacher": "Lüb"
            },
            {
              "id": 15,
              "name": "REe (Ree-st5)",
              "subject": "REe",
              "group": "Ree-st5",
              "teacher": "Bru"
            },
            {
              "id": 22,
              "name": "FlIn",
              "subject": "FlIn",
              "group": null,
              "teacher": "Vet"
            },
            {
              "id": 23,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "Lien"
            },
            {
              "id": 28,
              "name": "ETH (ETH-5bc)",
              "subject": "ETH",
              "group": "ETH-5bc",
              "teacher": "Zin"
            },
            {
              "id": 793,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Küh"
            },
            {
              "id": 38,
              "name": "FlIn",
              "subject": "FlIn",
              "group": null,
              "teacher": "Bru"
            },
            {
              "id": 54,
              "name": "GEO",
              "subject": "GEO",
              "group": null,
              "teacher": "Sch"
            },
            {
              "id": 55,
              "name": "TC (TC-5c-1)",
              "subject": "TC",
              "group": "TC-5c-1",
              "teacher": "SeC"
            },
            {
              "id": 43,
              "name": "EN",
              "subject": "EN",
              "group": null,
              "teacher": "Bet"
            },
            {
              "id": 44,
              "name": "MU",
              "subject": "MU",
              "group": null,
              "teacher": "Paw"
            },
            {
              "id": 45,
              "name": "KU",
              "subject": "KU",
              "group": null,
              "teacher": "Kön"
            },
            {
              "id": 792,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "HoM"
            },
            {
              "id": 48,
              "name": "MA",
              "subject": "MA",
              "group": null,
              "teacher": "Gie"
            },
            {
              "id": 49,
              "name": "DE",
              "subject": "DE",
              "group": null,
              "teacher": "Wil"
            },
            {
              "id": 50,
              "name": "FlIn",
              "subject": "FlIn",
              "group": null,
              "teacher": "Wil"
            },
            {
              "id": 51,
              "name": "SPO",
              "subject": "SPO",
              "group": null,
              "teacher": "Mel"
            },
            {
              "id": 52,
              "name": "BIO",
              "subject": "BIO",
              "group": null,
              "teacher": "HoK"
            },
            {
              "id": 53,
              "name": "GE",
              "subject": "GE",
              "group": null,
              "teacher": "Mar"
            },
            {
              "id": 791,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Bis"
            },
            {
              "id": 74,
              "name": "KOM",
              "subject": "KOM",
              "group": null,
              "teacher": "Gie"
            },
            {
              "id": 794,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Zac"
            },
            {
              "id": 790,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Zac"
            },
            {
              "id": 789,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Bän"
            },
            {
              "id": 464,
              "name": "TC (TC-5c-2)",
              "subject": "TC",
              "group": "TC-5c-2",
              "teacher": "Hän"
            },
            {
              "id": 472,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "Völk"
            },
            {
              "id": 473,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "Züc"
            },
            {
              "id": 474,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "Ble"
            },
            {
              "id": 475,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "Kue"
            },
            {
              "id": 476,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "BoM"
            },
            {
              "id": 477,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "Paw"
            },
            {
              "id": 478,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Bän"
            },
            {
              "id": 480,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Bis"
            },
            {
              "id": 481,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "HoM"
            },
            {
              "id": 482,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Küh"
            },
            {
              "id": 483,
              "name": "FlIn",
              "subject": "FlIn",
              "group": null,
              "teacher": "The"
            },
            {
              "id": 594,
              "name": "Jazz",
              "subject": "Jazz",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 727,
              "name": "AGTö",
              "subject": "AGTö",
              "group": null,
              "teacher": null
            },
            {
              "id": 718,
              "name": "AGThe",
              "subject": "AGThe",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 719,
              "name": "AG Gi",
              "subject": "AG Gi",
              "group": null,
              "teacher": "Kno"
            },
            {
              "id": 720,
              "name": "AG SV",
              "subject": "AG SV",
              "group": null,
              "teacher": "Ebe"
            },
            {
              "id": 721,
              "name": "AG V",
              "subject": "AG V",
              "group": null,
              "teacher": "Göb"
            },
            {
              "id": 723,
              "name": "AG S",
              "subject": "AG S",
              "group": null,
              "teacher": "Vet"
            },
            {
              "id": 724,
              "name": "AG Fi",
              "subject": "AG Fi",
              "group": null,
              "teacher": "Lien"
            },
            {
              "id": 801,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Gast"
            },
            {
              "id": 802,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Gast"
            }
          ],
          "plannedLessons": [
            {
              "id": 43,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "EN" },
              "teacher": { "changed": false, "value": "Bet" },
              "room": { "changed": false, "value": "E2.07" },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 43,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "EN" },
              "teacher": { "changed": false, "value": "Bet" },
              "room": { "changed": false, "value": "E2.07" },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 49,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "Wil" },
              "room": { "changed": false, "value": "E2.07" },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 23,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Lien" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 472,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Völk" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 473,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Züc" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 474,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Ble" },
              "room": { "changed": false, "value": "TH 1" },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 475,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Kue" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 476,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "BoM" },
              "room": { "changed": false, "value": "KUFA" },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 477,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Paw" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 482,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Küh" },
              "room": { "changed": false, "value": "E2.16" },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 789,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Bän" },
              "room": { "changed": false, "value": "A0.16" },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 792,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "HoM" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 794,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Zac" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 791,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Bis" },
              "room": { "changed": true, "value": "S1.15" },
              "schoolClass": "5c",
              "info": "Raum geändert"
            },
            {
              "id": 23,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Lien" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 472,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Völk" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 473,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Züc" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 474,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Ble" },
              "room": { "changed": false, "value": "TH 1" },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 475,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Kue" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 476,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "BoM" },
              "room": { "changed": false, "value": "KUFA" },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 477,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Paw" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 482,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Küh" },
              "room": { "changed": false, "value": "E2.16" },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 789,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Bän" },
              "room": { "changed": false, "value": "A0.16" },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 792,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "HoM" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 794,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Zac" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 791,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Bis" },
              "room": { "changed": true, "value": "S1.15" },
              "schoolClass": "5c",
              "info": "Raum geändert"
            },
            {
              "id": 44,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "MU" },
              "teacher": { "changed": false, "value": "Paw" },
              "room": { "changed": false, "value": "A0.09" },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 721,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "AG V" },
              "teacher": { "changed": false, "value": "Göb" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 723,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "AG S" },
              "teacher": { "changed": false, "value": "Vet" },
              "room": { "changed": false, "value": "E1.15" },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 721,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "AG V" },
              "teacher": { "changed": false, "value": "Göb" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 723,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "AG S" },
              "teacher": { "changed": false, "value": "Vet" },
              "room": { "changed": false, "value": "E1.15" },
              "schoolClass": "5c",
              "info": null
            }
          ]
        },
        {
          "name": "5d",
          "type": "schoolClass",
          "timetable": [
            {
              "id": 17,
              "name": "ETH (ETH-5ad)",
              "subject": "ETH",
              "group": "ETH-5ad",
              "teacher": "Zin"
            },
            {
              "id": 16,
              "name": "REk (Rek-st5)",
              "subject": "REk",
              "group": "Rek-st5",
              "teacher": "Lüb"
            },
            {
              "id": 15,
              "name": "REe (Ree-st5)",
              "subject": "REe",
              "group": "Ree-st5",
              "teacher": "Bru"
            },
            {
              "id": 22,
              "name": "FlIn",
              "subject": "FlIn",
              "group": null,
              "teacher": "Vet"
            },
            {
              "id": 23,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "Lien"
            },
            {
              "id": 793,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Küh"
            },
            {
              "id": 38,
              "name": "FlIn",
              "subject": "FlIn",
              "group": null,
              "teacher": "Bru"
            },
            {
              "id": 792,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "HoM"
            },
            {
              "id": 50,
              "name": "FlIn",
              "subject": "FlIn",
              "group": null,
              "teacher": "Wil"
            },
            {
              "id": 70,
              "name": "BIO",
              "subject": "BIO",
              "group": null,
              "teacher": "HoK"
            },
            {
              "id": 71,
              "name": "GE",
              "subject": "GE",
              "group": null,
              "teacher": "Mar"
            },
            {
              "id": 58,
              "name": "GEO",
              "subject": "GEO",
              "group": null,
              "teacher": "Lin"
            },
            {
              "id": 60,
              "name": "TC (TC-5d-2)",
              "subject": "TC",
              "group": "TC-5d-2",
              "teacher": "Hän"
            },
            {
              "id": 61,
              "name": "EN",
              "subject": "EN",
              "group": null,
              "teacher": "Scl"
            },
            {
              "id": 62,
              "name": "MU",
              "subject": "MU",
              "group": null,
              "teacher": "Bän"
            },
            {
              "id": 63,
              "name": "KU",
              "subject": "KU",
              "group": null,
              "teacher": "Kön"
            },
            {
              "id": 791,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Bis"
            },
            {
              "id": 66,
              "name": "MA",
              "subject": "MA",
              "group": null,
              "teacher": "Gla"
            },
            {
              "id": 67,
              "name": "DE",
              "subject": "DE",
              "group": null,
              "teacher": "Pau"
            },
            {
              "id": 69,
              "name": "SPO",
              "subject": "SPO",
              "group": null,
              "teacher": "Mel"
            },
            {
              "id": 75,
              "name": "KOM",
              "subject": "KOM",
              "group": null,
              "teacher": "Pau"
            },
            {
              "id": 798,
              "name": "MU",
              "subject": "MU",
              "group": null,
              "teacher": "Bän"
            },
            {
              "id": 794,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Zac"
            },
            {
              "id": 790,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Zac"
            },
            {
              "id": 789,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Bän"
            },
            {
              "id": 467,
              "name": "TC (TC-5d-1)",
              "subject": "TC",
              "group": "TC-5d-1",
              "teacher": "SeC"
            },
            {
              "id": 472,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "Völk"
            },
            {
              "id": 473,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "Züc"
            },
            {
              "id": 474,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "Ble"
            },
            {
              "id": 475,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "Kue"
            },
            {
              "id": 476,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "BoM"
            },
            {
              "id": 477,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "Paw"
            },
            {
              "id": 478,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Bän"
            },
            {
              "id": 480,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Bis"
            },
            {
              "id": 481,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "HoM"
            },
            {
              "id": 482,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Küh"
            },
            {
              "id": 483,
              "name": "FlIn",
              "subject": "FlIn",
              "group": null,
              "teacher": "The"
            },
            {
              "id": 594,
              "name": "Jazz",
              "subject": "Jazz",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 727,
              "name": "AGTö",
              "subject": "AGTö",
              "group": null,
              "teacher": null
            },
            {
              "id": 718,
              "name": "AGThe",
              "subject": "AGThe",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 719,
              "name": "AG Gi",
              "subject": "AG Gi",
              "group": null,
              "teacher": "Kno"
            },
            {
              "id": 720,
              "name": "AG SV",
              "subject": "AG SV",
              "group": null,
              "teacher": "Ebe"
            },
            {
              "id": 721,
              "name": "AG V",
              "subject": "AG V",
              "group": null,
              "teacher": "Göb"
            },
            {
              "id": 723,
              "name": "AG S",
              "subject": "AG S",
              "group": null,
              "teacher": "Vet"
            },
            {
              "id": 724,
              "name": "AG Fi",
              "subject": "AG Fi",
              "group": null,
              "teacher": "Lien"
            },
            {
              "id": 801,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Gast"
            },
            {
              "id": 802,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Gast"
            },
            {
              "id": -1,
              "name": "ETH-5ad",
              "subject": "ETH-5ad",
              "teacher": "Zin"
            },
            {
              "id": -1,
              "name": "Ree-st5",
              "subject": "Ree-st5",
              "teacher": "Bru"
            },
            {
              "id": -1,
              "name": "Rek-st5",
              "subject": "Rek-st5",
              "teacher": "Lüb"
            },
            {
              "id": -1,
              "name": "TC-5d-1",
              "subject": "TC-5d-1",
              "teacher": "SeC"
            },
            {
              "id": -1,
              "name": "TC-5d-2",
              "subject": "TC-5d-2",
              "teacher": "Hän"
            }
          ],
          "courses": [
            { "subject": "ETH-5ad", "teacher": "Zin" },
            { "subject": "Ree-st5", "teacher": "Bru" },
            { "subject": "Rek-st5", "teacher": "Lüb" },
            { "subject": "TC-5d-1", "teacher": "SeC" },
            { "subject": "TC-5d-2", "teacher": "Hän" }
          ],
          "lessons": [
            {
              "id": 17,
              "name": "ETH (ETH-5ad)",
              "subject": "ETH",
              "group": "ETH-5ad",
              "teacher": "Zin"
            },
            {
              "id": 16,
              "name": "REk (Rek-st5)",
              "subject": "REk",
              "group": "Rek-st5",
              "teacher": "Lüb"
            },
            {
              "id": 15,
              "name": "REe (Ree-st5)",
              "subject": "REe",
              "group": "Ree-st5",
              "teacher": "Bru"
            },
            {
              "id": 22,
              "name": "FlIn",
              "subject": "FlIn",
              "group": null,
              "teacher": "Vet"
            },
            {
              "id": 23,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "Lien"
            },
            {
              "id": 793,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Küh"
            },
            {
              "id": 38,
              "name": "FlIn",
              "subject": "FlIn",
              "group": null,
              "teacher": "Bru"
            },
            {
              "id": 792,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "HoM"
            },
            {
              "id": 50,
              "name": "FlIn",
              "subject": "FlIn",
              "group": null,
              "teacher": "Wil"
            },
            {
              "id": 70,
              "name": "BIO",
              "subject": "BIO",
              "group": null,
              "teacher": "HoK"
            },
            {
              "id": 71,
              "name": "GE",
              "subject": "GE",
              "group": null,
              "teacher": "Mar"
            },
            {
              "id": 58,
              "name": "GEO",
              "subject": "GEO",
              "group": null,
              "teacher": "Lin"
            },
            {
              "id": 60,
              "name": "TC (TC-5d-2)",
              "subject": "TC",
              "group": "TC-5d-2",
              "teacher": "Hän"
            },
            {
              "id": 61,
              "name": "EN",
              "subject": "EN",
              "group": null,
              "teacher": "Scl"
            },
            {
              "id": 62,
              "name": "MU",
              "subject": "MU",
              "group": null,
              "teacher": "Bän"
            },
            {
              "id": 63,
              "name": "KU",
              "subject": "KU",
              "group": null,
              "teacher": "Kön"
            },
            {
              "id": 791,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Bis"
            },
            {
              "id": 66,
              "name": "MA",
              "subject": "MA",
              "group": null,
              "teacher": "Gla"
            },
            {
              "id": 67,
              "name": "DE",
              "subject": "DE",
              "group": null,
              "teacher": "Pau"
            },
            {
              "id": 69,
              "name": "SPO",
              "subject": "SPO",
              "group": null,
              "teacher": "Mel"
            },
            {
              "id": 75,
              "name": "KOM",
              "subject": "KOM",
              "group": null,
              "teacher": "Pau"
            },
            {
              "id": 798,
              "name": "MU",
              "subject": "MU",
              "group": null,
              "teacher": "Bän"
            },
            {
              "id": 794,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Zac"
            },
            {
              "id": 790,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Zac"
            },
            {
              "id": 789,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Bän"
            },
            {
              "id": 467,
              "name": "TC (TC-5d-1)",
              "subject": "TC",
              "group": "TC-5d-1",
              "teacher": "SeC"
            },
            {
              "id": 472,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "Völk"
            },
            {
              "id": 473,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "Züc"
            },
            {
              "id": 474,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "Ble"
            },
            {
              "id": 475,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "Kue"
            },
            {
              "id": 476,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "BoM"
            },
            {
              "id": 477,
              "name": "Kult",
              "subject": "Kult",
              "group": null,
              "teacher": "Paw"
            },
            {
              "id": 478,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Bän"
            },
            {
              "id": 480,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Bis"
            },
            {
              "id": 481,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "HoM"
            },
            {
              "id": 482,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Küh"
            },
            {
              "id": 483,
              "name": "FlIn",
              "subject": "FlIn",
              "group": null,
              "teacher": "The"
            },
            {
              "id": 594,
              "name": "Jazz",
              "subject": "Jazz",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 727,
              "name": "AGTö",
              "subject": "AGTö",
              "group": null,
              "teacher": null
            },
            {
              "id": 718,
              "name": "AGThe",
              "subject": "AGThe",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 719,
              "name": "AG Gi",
              "subject": "AG Gi",
              "group": null,
              "teacher": "Kno"
            },
            {
              "id": 720,
              "name": "AG SV",
              "subject": "AG SV",
              "group": null,
              "teacher": "Ebe"
            },
            {
              "id": 721,
              "name": "AG V",
              "subject": "AG V",
              "group": null,
              "teacher": "Göb"
            },
            {
              "id": 723,
              "name": "AG S",
              "subject": "AG S",
              "group": null,
              "teacher": "Vet"
            },
            {
              "id": 724,
              "name": "AG Fi",
              "subject": "AG Fi",
              "group": null,
              "teacher": "Lien"
            },
            {
              "id": 801,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Gast"
            },
            {
              "id": 802,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "Gast"
            }
          ],
          "plannedLessons": [
            {
              "id": 61,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "EN" },
              "teacher": { "changed": false, "value": "Scl" },
              "room": { "changed": false, "value": "E2.08" },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 61,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "EN" },
              "teacher": { "changed": false, "value": "Scl" },
              "room": { "changed": false, "value": "E2.08" },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 71,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "GE" },
              "teacher": { "changed": false, "value": "Mar" },
              "room": { "changed": false, "value": "E0.14" },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 23,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Lien" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 472,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Völk" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 473,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Züc" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 474,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Ble" },
              "room": { "changed": false, "value": "TH 1" },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 475,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Kue" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 476,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "BoM" },
              "room": { "changed": false, "value": "KUFA" },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 477,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Paw" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 482,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Küh" },
              "room": { "changed": false, "value": "E2.16" },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 789,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Bän" },
              "room": { "changed": false, "value": "A0.16" },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 792,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "HoM" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 794,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Zac" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 791,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Bis" },
              "room": { "changed": true, "value": "S1.15" },
              "schoolClass": "5d",
              "info": "Raum geändert"
            },
            {
              "id": 23,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Lien" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 472,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Völk" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 473,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Züc" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 474,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Ble" },
              "room": { "changed": false, "value": "TH 1" },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 475,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Kue" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 476,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "BoM" },
              "room": { "changed": false, "value": "KUFA" },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 477,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Paw" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 482,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Küh" },
              "room": { "changed": false, "value": "E2.16" },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 789,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Bän" },
              "room": { "changed": false, "value": "A0.16" },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 792,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "HoM" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 794,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Zac" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 791,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Bis" },
              "room": { "changed": true, "value": "S1.15" },
              "schoolClass": "5d",
              "info": "Raum geändert"
            },
            {
              "id": 66,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Gla" },
              "room": { "changed": false, "value": "E2.08" },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 721,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "AG V" },
              "teacher": { "changed": false, "value": "Göb" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 723,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "AG S" },
              "teacher": { "changed": false, "value": "Vet" },
              "room": { "changed": false, "value": "E1.15" },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 721,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "AG V" },
              "teacher": { "changed": false, "value": "Göb" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 723,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "AG S" },
              "teacher": { "changed": false, "value": "Vet" },
              "room": { "changed": false, "value": "E1.15" },
              "schoolClass": "5d",
              "info": null
            }
          ]
        },
        {
          "name": "6a",
          "type": "schoolClass",
          "timetable": [
            {
              "id": 792,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "HoM"
            },
            {
              "id": 78,
              "name": "DE",
              "subject": "DE",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 79,
              "name": "EN",
              "subject": "EN",
              "group": null,
              "teacher": "Kle"
            },
            {
              "id": 80,
              "name": "FR",
              "subject": "FR",
              "group": null,
              "teacher": "Kra"
            },
            {
              "id": 82,
              "name": "MA",
              "subject": "MA",
              "group": null,
              "teacher": "Sch"
            },
            {
              "id": 83,
              "name": "BIO",
              "subject": "BIO",
              "group": null,
              "teacher": "HoK"
            },
            {
              "id": 84,
              "name": "PH",
              "subject": "PH",
              "group": null,
              "teacher": "Thi"
            },
            {
              "id": 85,
              "name": "GE",
              "subject": "GE",
              "group": null,
              "teacher": "Mar"
            },
            {
              "id": 86,
              "name": "GEO",
              "subject": "GEO",
              "group": null,
              "teacher": "Lin"
            },
            {
              "id": 87,
              "name": "SPO",
              "subject": "SPO",
              "group": null,
              "teacher": "Mel"
            },
            {
              "id": 88,
              "name": "REe (REe-st6)",
              "subject": "REe",
              "group": "REe-st6",
              "teacher": "Bru"
            },
            {
              "id": 89,
              "name": "REk (REk-st6)",
              "subject": "REk",
              "group": "REk-st6",
              "teacher": "Lüb"
            },
            {
              "id": 90,
              "name": "ETH (ETH-6a)",
              "subject": "ETH",
              "group": "ETH-6a",
              "teacher": null
            },
            {
              "id": 91,
              "name": "KU",
              "subject": "KU",
              "group": null,
              "teacher": "Süm"
            },
            {
              "id": 92,
              "name": "MU",
              "subject": "MU",
              "group": null,
              "teacher": "Scö"
            },
            {
              "id": 94,
              "name": "TC (TC-6a-2)",
              "subject": "TC",
              "group": "TC-6a-2",
              "teacher": "SeC"
            },
            {
              "id": 111,
              "name": "KOM",
              "subject": "KOM",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 247,
              "name": "KiCH",
              "subject": "KiCH",
              "group": null,
              "teacher": "Gra"
            },
            {
              "id": 490,
              "name": "Lern",
              "subject": "Lern",
              "group": null,
              "teacher": "ZCOM"
            },
            {
              "id": 444,
              "name": "FlIn",
              "subject": "FlIn",
              "group": null,
              "teacher": "Vet"
            },
            {
              "id": 445,
              "name": "FlIn",
              "subject": "FlIn",
              "group": null,
              "teacher": "Süm"
            },
            {
              "id": 469,
              "name": "TC (TC-6a-1)",
              "subject": "TC",
              "group": "TC-6a-1",
              "teacher": "BoM"
            },
            {
              "id": 481,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "HoM"
            },
            {
              "id": 484,
              "name": "FlIn",
              "subject": "FlIn",
              "group": null,
              "teacher": "The"
            },
            {
              "id": 485,
              "name": "Lern",
              "subject": "Lern",
              "group": null,
              "teacher": "Sei"
            },
            {
              "id": 486,
              "name": "Lern",
              "subject": "Lern",
              "group": null,
              "teacher": "Kra"
            },
            {
              "id": 487,
              "name": "Lern",
              "subject": "Lern",
              "group": null,
              "teacher": "Kei"
            },
            {
              "id": 488,
              "name": "Lern",
              "subject": "Lern",
              "group": null,
              "teacher": "Hau"
            },
            {
              "id": 489,
              "name": "Lern",
              "subject": "Lern",
              "group": null,
              "teacher": "Wal"
            },
            {
              "id": 602,
              "name": "Band",
              "subject": "Band",
              "group": null,
              "teacher": "Sca"
            },
            {
              "id": 594,
              "name": "Jazz",
              "subject": "Jazz",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": -1,
              "name": "ETH-6a",
              "subject": "ETH-6a",
              "teacher": null
            },
            {
              "id": -1,
              "name": "REe-st6",
              "subject": "REe-st6",
              "teacher": "Bru"
            },
            {
              "id": -1,
              "name": "REk-st6",
              "subject": "REk-st6",
              "teacher": "Lüb"
            },
            {
              "id": -1,
              "name": "TC-6a-1",
              "subject": "TC-6a-1",
              "teacher": "BoM"
            },
            {
              "id": -1,
              "name": "TC-6a-2",
              "subject": "TC-6a-2",
              "teacher": "SeC"
            }
          ],
          "courses": [
            { "subject": "ETH-6a", "teacher": null },
            { "subject": "REe-st6", "teacher": "Bru" },
            { "subject": "REk-st6", "teacher": "Lüb" },
            { "subject": "TC-6a-1", "teacher": "BoM" },
            { "subject": "TC-6a-2", "teacher": "SeC" }
          ],
          "lessons": [
            {
              "id": 792,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "HoM"
            },
            {
              "id": 78,
              "name": "DE",
              "subject": "DE",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 79,
              "name": "EN",
              "subject": "EN",
              "group": null,
              "teacher": "Kle"
            },
            {
              "id": 80,
              "name": "FR",
              "subject": "FR",
              "group": null,
              "teacher": "Kra"
            },
            {
              "id": 82,
              "name": "MA",
              "subject": "MA",
              "group": null,
              "teacher": "Sch"
            },
            {
              "id": 83,
              "name": "BIO",
              "subject": "BIO",
              "group": null,
              "teacher": "HoK"
            },
            {
              "id": 84,
              "name": "PH",
              "subject": "PH",
              "group": null,
              "teacher": "Thi"
            },
            {
              "id": 85,
              "name": "GE",
              "subject": "GE",
              "group": null,
              "teacher": "Mar"
            },
            {
              "id": 86,
              "name": "GEO",
              "subject": "GEO",
              "group": null,
              "teacher": "Lin"
            },
            {
              "id": 87,
              "name": "SPO",
              "subject": "SPO",
              "group": null,
              "teacher": "Mel"
            },
            {
              "id": 88,
              "name": "REe (REe-st6)",
              "subject": "REe",
              "group": "REe-st6",
              "teacher": "Bru"
            },
            {
              "id": 89,
              "name": "REk (REk-st6)",
              "subject": "REk",
              "group": "REk-st6",
              "teacher": "Lüb"
            },
            {
              "id": 90,
              "name": "ETH (ETH-6a)",
              "subject": "ETH",
              "group": "ETH-6a",
              "teacher": null
            },
            {
              "id": 91,
              "name": "KU",
              "subject": "KU",
              "group": null,
              "teacher": "Süm"
            },
            {
              "id": 92,
              "name": "MU",
              "subject": "MU",
              "group": null,
              "teacher": "Scö"
            },
            {
              "id": 94,
              "name": "TC (TC-6a-2)",
              "subject": "TC",
              "group": "TC-6a-2",
              "teacher": "SeC"
            },
            {
              "id": 111,
              "name": "KOM",
              "subject": "KOM",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 247,
              "name": "KiCH",
              "subject": "KiCH",
              "group": null,
              "teacher": "Gra"
            },
            {
              "id": 490,
              "name": "Lern",
              "subject": "Lern",
              "group": null,
              "teacher": "ZCOM"
            },
            {
              "id": 444,
              "name": "FlIn",
              "subject": "FlIn",
              "group": null,
              "teacher": "Vet"
            },
            {
              "id": 445,
              "name": "FlIn",
              "subject": "FlIn",
              "group": null,
              "teacher": "Süm"
            },
            {
              "id": 469,
              "name": "TC (TC-6a-1)",
              "subject": "TC",
              "group": "TC-6a-1",
              "teacher": "BoM"
            },
            {
              "id": 481,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "HoM"
            },
            {
              "id": 484,
              "name": "FlIn",
              "subject": "FlIn",
              "group": null,
              "teacher": "The"
            },
            {
              "id": 485,
              "name": "Lern",
              "subject": "Lern",
              "group": null,
              "teacher": "Sei"
            },
            {
              "id": 486,
              "name": "Lern",
              "subject": "Lern",
              "group": null,
              "teacher": "Kra"
            },
            {
              "id": 487,
              "name": "Lern",
              "subject": "Lern",
              "group": null,
              "teacher": "Kei"
            },
            {
              "id": 488,
              "name": "Lern",
              "subject": "Lern",
              "group": null,
              "teacher": "Hau"
            },
            {
              "id": 489,
              "name": "Lern",
              "subject": "Lern",
              "group": null,
              "teacher": "Wal"
            },
            {
              "id": 602,
              "name": "Band",
              "subject": "Band",
              "group": null,
              "teacher": "Sca"
            },
            {
              "id": 594,
              "name": "Jazz",
              "subject": "Jazz",
              "group": null,
              "teacher": "BoI"
            }
          ],
          "plannedLessons": [
            {
              "id": 80,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "FR" },
              "teacher": { "changed": false, "value": "Kra" },
              "room": { "changed": false, "value": "E2.13" },
              "schoolClass": "6a",
              "info": null
            },
            {
              "id": 79,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "EN" },
              "teacher": { "changed": false, "value": "Kle" },
              "room": { "changed": false, "value": "E0.07" },
              "schoolClass": "6a",
              "info": null
            },
            {
              "id": 78,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "BoI" },
              "room": { "changed": false, "value": "E0.07" },
              "schoolClass": "6a",
              "info": null
            },
            {
              "id": 444,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "FlIn" },
              "teacher": { "changed": false, "value": "Vet" },
              "room": { "changed": false, "value": "E1.09" },
              "schoolClass": "6a",
              "info": null
            },
            {
              "id": 445,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "FlIn" },
              "teacher": { "changed": false, "value": "Süm" },
              "room": { "changed": false, "value": "E1.08" },
              "schoolClass": "6a",
              "info": null
            },
            {
              "id": 484,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "FlIn" },
              "teacher": { "changed": false, "value": "The" },
              "room": { "changed": false, "value": "E0.13" },
              "schoolClass": "6a",
              "info": null
            },
            {
              "id": 792,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "HoM" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "6a",
              "info": null
            },
            {
              "id": 444,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "FlIn" },
              "teacher": { "changed": false, "value": "Vet" },
              "room": { "changed": false, "value": "E1.09" },
              "schoolClass": "6a",
              "info": null
            },
            {
              "id": 445,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "FlIn" },
              "teacher": { "changed": false, "value": "Süm" },
              "room": { "changed": false, "value": "E1.08" },
              "schoolClass": "6a",
              "info": null
            },
            {
              "id": 484,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "FlIn" },
              "teacher": { "changed": false, "value": "The" },
              "room": { "changed": false, "value": "E0.13" },
              "schoolClass": "6a",
              "info": null
            },
            {
              "id": 792,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "HoM" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "6a",
              "info": null
            },
            {
              "id": 92,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "MU" },
              "teacher": { "changed": false, "value": "Scö" },
              "room": { "changed": false, "value": "S2.17" },
              "schoolClass": "6a",
              "info": null
            },
            {
              "id": 111,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "KOM" },
              "teacher": { "changed": false, "value": "BoI" },
              "room": { "changed": false, "value": "E0.07" },
              "schoolClass": "6a",
              "info": null
            }
          ]
        },
        {
          "name": "6b",
          "type": "schoolClass",
          "timetable": [
            {
              "id": 792,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "HoM"
            },
            {
              "id": 88,
              "name": "REe (REe-st6)",
              "subject": "REe",
              "group": "REe-st6",
              "teacher": "Bru"
            },
            {
              "id": 89,
              "name": "REk (REk-st6)",
              "subject": "REk",
              "group": "REk-st6",
              "teacher": "Lüb"
            },
            {
              "id": 95,
              "name": "DE",
              "subject": "DE",
              "group": null,
              "teacher": "Zin"
            },
            {
              "id": 96,
              "name": "EN",
              "subject": "EN",
              "group": null,
              "teacher": "Wil"
            },
            {
              "id": 97,
              "name": "FR",
              "subject": "FR",
              "group": null,
              "teacher": "Ste"
            },
            {
              "id": 98,
              "name": "TC (TC-6b-1)",
              "subject": "TC",
              "group": "TC-6b-1",
              "teacher": "BoM"
            },
            {
              "id": 99,
              "name": "MA",
              "subject": "MA",
              "group": null,
              "teacher": "Sch"
            },
            {
              "id": 100,
              "name": "BIO",
              "subject": "BIO",
              "group": null,
              "teacher": "HoK"
            },
            {
              "id": 101,
              "name": "PH",
              "subject": "PH",
              "group": null,
              "teacher": "Thi"
            },
            {
              "id": 102,
              "name": "GE",
              "subject": "GE",
              "group": null,
              "teacher": "Mar"
            },
            {
              "id": 103,
              "name": "GEO",
              "subject": "GEO",
              "group": null,
              "teacher": "Lin"
            },
            {
              "id": 104,
              "name": "SPO",
              "subject": "SPO",
              "group": null,
              "teacher": "Mel"
            },
            {
              "id": 110,
              "name": "TC (TC-6b-2)",
              "subject": "TC",
              "group": "TC-6b-2",
              "teacher": "SeC"
            },
            {
              "id": 109,
              "name": "MU",
              "subject": "MU",
              "group": null,
              "teacher": "Paw"
            },
            {
              "id": 107,
              "name": "ETH",
              "subject": "ETH",
              "group": null,
              "teacher": "Zin"
            },
            {
              "id": 108,
              "name": "KU",
              "subject": "KU",
              "group": null,
              "teacher": "Süm"
            },
            {
              "id": 112,
              "name": "KOM",
              "subject": "KOM",
              "group": null,
              "teacher": "Zin"
            },
            {
              "id": 490,
              "name": "Lern",
              "subject": "Lern",
              "group": null,
              "teacher": "ZCOM"
            },
            {
              "id": 444,
              "name": "FlIn",
              "subject": "FlIn",
              "group": null,
              "teacher": "Vet"
            },
            {
              "id": 445,
              "name": "FlIn",
              "subject": "FlIn",
              "group": null,
              "teacher": "Süm"
            },
            {
              "id": 481,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "HoM"
            },
            {
              "id": 484,
              "name": "FlIn",
              "subject": "FlIn",
              "group": null,
              "teacher": "The"
            },
            {
              "id": 485,
              "name": "Lern",
              "subject": "Lern",
              "group": null,
              "teacher": "Sei"
            },
            {
              "id": 486,
              "name": "Lern",
              "subject": "Lern",
              "group": null,
              "teacher": "Kra"
            },
            {
              "id": 487,
              "name": "Lern",
              "subject": "Lern",
              "group": null,
              "teacher": "Kei"
            },
            {
              "id": 488,
              "name": "Lern",
              "subject": "Lern",
              "group": null,
              "teacher": "Hau"
            },
            {
              "id": 489,
              "name": "Lern",
              "subject": "Lern",
              "group": null,
              "teacher": "Wal"
            },
            {
              "id": 594,
              "name": "Jazz",
              "subject": "Jazz",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 721,
              "name": "AG V",
              "subject": "AG V",
              "group": null,
              "teacher": "Göb"
            },
            {
              "id": -1,
              "name": "REe-st6",
              "subject": "REe-st6",
              "teacher": "Bru"
            },
            {
              "id": -1,
              "name": "REk-st6",
              "subject": "REk-st6",
              "teacher": "Lüb"
            },
            {
              "id": -1,
              "name": "TC-6b-1",
              "subject": "TC-6b-1",
              "teacher": "BoM"
            },
            {
              "id": -1,
              "name": "TC-6b-2",
              "subject": "TC-6b-2",
              "teacher": "SeC"
            }
          ],
          "courses": [
            { "subject": "REe-st6", "teacher": "Bru" },
            { "subject": "REk-st6", "teacher": "Lüb" },
            { "subject": "TC-6b-1", "teacher": "BoM" },
            { "subject": "TC-6b-2", "teacher": "SeC" }
          ],
          "lessons": [
            {
              "id": 792,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "HoM"
            },
            {
              "id": 88,
              "name": "REe (REe-st6)",
              "subject": "REe",
              "group": "REe-st6",
              "teacher": "Bru"
            },
            {
              "id": 89,
              "name": "REk (REk-st6)",
              "subject": "REk",
              "group": "REk-st6",
              "teacher": "Lüb"
            },
            {
              "id": 95,
              "name": "DE",
              "subject": "DE",
              "group": null,
              "teacher": "Zin"
            },
            {
              "id": 96,
              "name": "EN",
              "subject": "EN",
              "group": null,
              "teacher": "Wil"
            },
            {
              "id": 97,
              "name": "FR",
              "subject": "FR",
              "group": null,
              "teacher": "Ste"
            },
            {
              "id": 98,
              "name": "TC (TC-6b-1)",
              "subject": "TC",
              "group": "TC-6b-1",
              "teacher": "BoM"
            },
            {
              "id": 99,
              "name": "MA",
              "subject": "MA",
              "group": null,
              "teacher": "Sch"
            },
            {
              "id": 100,
              "name": "BIO",
              "subject": "BIO",
              "group": null,
              "teacher": "HoK"
            },
            {
              "id": 101,
              "name": "PH",
              "subject": "PH",
              "group": null,
              "teacher": "Thi"
            },
            {
              "id": 102,
              "name": "GE",
              "subject": "GE",
              "group": null,
              "teacher": "Mar"
            },
            {
              "id": 103,
              "name": "GEO",
              "subject": "GEO",
              "group": null,
              "teacher": "Lin"
            },
            {
              "id": 104,
              "name": "SPO",
              "subject": "SPO",
              "group": null,
              "teacher": "Mel"
            },
            {
              "id": 110,
              "name": "TC (TC-6b-2)",
              "subject": "TC",
              "group": "TC-6b-2",
              "teacher": "SeC"
            },
            {
              "id": 109,
              "name": "MU",
              "subject": "MU",
              "group": null,
              "teacher": "Paw"
            },
            {
              "id": 107,
              "name": "ETH",
              "subject": "ETH",
              "group": null,
              "teacher": "Zin"
            },
            {
              "id": 108,
              "name": "KU",
              "subject": "KU",
              "group": null,
              "teacher": "Süm"
            },
            {
              "id": 112,
              "name": "KOM",
              "subject": "KOM",
              "group": null,
              "teacher": "Zin"
            },
            {
              "id": 490,
              "name": "Lern",
              "subject": "Lern",
              "group": null,
              "teacher": "ZCOM"
            },
            {
              "id": 444,
              "name": "FlIn",
              "subject": "FlIn",
              "group": null,
              "teacher": "Vet"
            },
            {
              "id": 445,
              "name": "FlIn",
              "subject": "FlIn",
              "group": null,
              "teacher": "Süm"
            },
            {
              "id": 481,
              "name": "KuLe",
              "subject": "KuLe",
              "group": null,
              "teacher": "HoM"
            },
            {
              "id": 484,
              "name": "FlIn",
              "subject": "FlIn",
              "group": null,
              "teacher": "The"
            },
            {
              "id": 485,
              "name": "Lern",
              "subject": "Lern",
              "group": null,
              "teacher": "Sei"
            },
            {
              "id": 486,
              "name": "Lern",
              "subject": "Lern",
              "group": null,
              "teacher": "Kra"
            },
            {
              "id": 487,
              "name": "Lern",
              "subject": "Lern",
              "group": null,
              "teacher": "Kei"
            },
            {
              "id": 488,
              "name": "Lern",
              "subject": "Lern",
              "group": null,
              "teacher": "Hau"
            },
            {
              "id": 489,
              "name": "Lern",
              "subject": "Lern",
              "group": null,
              "teacher": "Wal"
            },
            {
              "id": 594,
              "name": "Jazz",
              "subject": "Jazz",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 721,
              "name": "AG V",
              "subject": "AG V",
              "group": null,
              "teacher": "Göb"
            }
          ],
          "plannedLessons": [
            {
              "id": 103,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "GEO" },
              "teacher": { "changed": false, "value": "Lin" },
              "room": { "changed": false, "value": "E0.12" },
              "schoolClass": "6b",
              "info": null
            },
            {
              "id": 96,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "EN" },
              "teacher": { "changed": false, "value": "Wil" },
              "room": { "changed": false, "value": "E0.08" },
              "schoolClass": "6b",
              "info": null
            },
            {
              "id": 95,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "Zin" },
              "room": { "changed": false, "value": "E0.08" },
              "schoolClass": "6b",
              "info": null
            },
            {
              "id": 444,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "FlIn" },
              "teacher": { "changed": false, "value": "Vet" },
              "room": { "changed": false, "value": "E1.09" },
              "schoolClass": "6b",
              "info": null
            },
            {
              "id": 445,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "FlIn" },
              "teacher": { "changed": false, "value": "Süm" },
              "room": { "changed": false, "value": "E1.08" },
              "schoolClass": "6b",
              "info": null
            },
            {
              "id": 484,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "FlIn" },
              "teacher": { "changed": false, "value": "The" },
              "room": { "changed": false, "value": "E0.13" },
              "schoolClass": "6b",
              "info": null
            },
            {
              "id": 792,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "HoM" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "6b",
              "info": null
            },
            {
              "id": 444,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "FlIn" },
              "teacher": { "changed": false, "value": "Vet" },
              "room": { "changed": false, "value": "E1.09" },
              "schoolClass": "6b",
              "info": null
            },
            {
              "id": 445,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "FlIn" },
              "teacher": { "changed": false, "value": "Süm" },
              "room": { "changed": false, "value": "E1.08" },
              "schoolClass": "6b",
              "info": null
            },
            {
              "id": 484,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "FlIn" },
              "teacher": { "changed": false, "value": "The" },
              "room": { "changed": false, "value": "E0.13" },
              "schoolClass": "6b",
              "info": null
            },
            {
              "id": 792,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "HoM" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "6b",
              "info": null
            },
            {
              "id": 99,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Sch" },
              "room": { "changed": false, "value": "E0.08" },
              "schoolClass": "6b",
              "info": null
            },
            {
              "id": 721,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "AG V" },
              "teacher": { "changed": false, "value": "Göb" },
              "room": { "changed": false, "value": null },
              "schoolClass": "6b",
              "info": null
            },
            {
              "id": 721,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "AG V" },
              "teacher": { "changed": false, "value": "Göb" },
              "room": { "changed": false, "value": null },
              "schoolClass": "6b",
              "info": null
            }
          ]
        },
        {
          "name": "7a",
          "type": "schoolClass",
          "timetable": [
            {
              "id": 716,
              "name": "Band",
              "subject": "Band",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 114,
              "name": "DE",
              "subject": "DE",
              "group": null,
              "teacher": "Höl"
            },
            {
              "id": 115,
              "name": "EN",
              "subject": "EN",
              "group": null,
              "teacher": "Din"
            },
            {
              "id": 116,
              "name": "FR (FR-7a-7c)",
              "subject": "FR",
              "group": "FR-7a-7c",
              "teacher": "Kra"
            },
            {
              "id": 117,
              "name": "RU (RU-7ab)",
              "subject": "RU",
              "group": "RU-7ab",
              "teacher": "Sei"
            },
            {
              "id": 118,
              "name": "MA",
              "subject": "MA",
              "group": null,
              "teacher": "Gla"
            },
            {
              "id": 119,
              "name": "BIO",
              "subject": "BIO",
              "group": null,
              "teacher": "HoK"
            },
            {
              "id": 120,
              "name": "CH",
              "subject": "CH",
              "group": null,
              "teacher": "Das"
            },
            {
              "id": 121,
              "name": "PH",
              "subject": "PH",
              "group": null,
              "teacher": "Thi"
            },
            {
              "id": 122,
              "name": "GE",
              "subject": "GE",
              "group": null,
              "teacher": "Kie"
            },
            {
              "id": 123,
              "name": "GRW",
              "subject": "GRW",
              "group": null,
              "teacher": "Mar"
            },
            {
              "id": 124,
              "name": "GEO",
              "subject": "GEO",
              "group": null,
              "teacher": "Kön"
            },
            {
              "id": 125,
              "name": "SPO",
              "subject": "SPO",
              "group": null,
              "teacher": "Scg"
            },
            {
              "id": 126,
              "name": "REe (RE/e-st7)",
              "subject": "REe",
              "group": "RE/e-st7",
              "teacher": "Bru"
            },
            {
              "id": 127,
              "name": "REk (RE/k-st7)",
              "subject": "REk",
              "group": "RE/k-st7",
              "teacher": "Lüb"
            },
            {
              "id": 128,
              "name": "ETH (ETH-7ac)",
              "subject": "ETH",
              "group": "ETH-7ac",
              "teacher": "Zin"
            },
            {
              "id": 129,
              "name": "KU",
              "subject": "KU",
              "group": null,
              "teacher": "Süm"
            },
            {
              "id": 130,
              "name": "MU",
              "subject": "MU",
              "group": null,
              "teacher": "Gra"
            },
            {
              "id": 131,
              "name": "INF (INF-7a-1)",
              "subject": "INF",
              "group": "INF-7a-1",
              "teacher": "Shu"
            },
            {
              "id": 132,
              "name": "INF (INF-7a-2)",
              "subject": "INF",
              "group": "INF-7a-2",
              "teacher": "Gie"
            },
            {
              "id": 152,
              "name": "MUHG",
              "subject": "MUHG",
              "group": null,
              "teacher": "Gra"
            },
            {
              "id": 153,
              "name": "MUHG",
              "subject": "MUHG",
              "group": null,
              "teacher": "Gra"
            },
            {
              "id": 725,
              "name": "AG J",
              "subject": "AG J",
              "group": null,
              "teacher": "Göb"
            },
            {
              "id": 157,
              "name": "ETH (ETH-7ad)",
              "subject": "ETH",
              "group": "ETH-7ad",
              "teacher": "Zin"
            },
            {
              "id": 198,
              "name": "GE",
              "subject": "GE",
              "group": null,
              "teacher": "Kie"
            },
            {
              "id": 199,
              "name": "GEO",
              "subject": "GEO",
              "group": null,
              "teacher": "Kön"
            },
            {
              "id": 247,
              "name": "KiCH",
              "subject": "KiCH",
              "group": null,
              "teacher": "Gra"
            },
            {
              "id": 595,
              "name": "Jazz",
              "subject": "Jazz",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": -1,
              "name": "ETH-7ac",
              "subject": "ETH-7ac",
              "teacher": "Zin"
            },
            {
              "id": -1,
              "name": "ETH-7ad",
              "subject": "ETH-7ad",
              "teacher": "Zin"
            },
            {
              "id": -1,
              "name": "FR-7a-7c",
              "subject": "FR-7a-7c",
              "teacher": "Kra"
            },
            {
              "id": -1,
              "name": "INF-7a-1",
              "subject": "INF-7a-1",
              "teacher": "Shu"
            },
            {
              "id": -1,
              "name": "INF-7a-2",
              "subject": "INF-7a-2",
              "teacher": "Gie"
            },
            {
              "id": -1,
              "name": "RE/e-st7",
              "subject": "RE/e-st7",
              "teacher": "Bru"
            },
            {
              "id": -1,
              "name": "RE/k-st7",
              "subject": "RE/k-st7",
              "teacher": "Lüb"
            },
            {
              "id": -1,
              "name": "RU-7ab",
              "subject": "RU-7ab",
              "teacher": "Sei"
            }
          ],
          "courses": [
            { "subject": "ETH-7ac", "teacher": "Zin" },
            { "subject": "ETH-7ad", "teacher": "Zin" },
            { "subject": "FR-7a-7c", "teacher": "Kra" },
            { "subject": "INF-7a-1", "teacher": "Shu" },
            { "subject": "INF-7a-2", "teacher": "Gie" },
            { "subject": "RE/e-st7", "teacher": "Bru" },
            { "subject": "RE/k-st7", "teacher": "Lüb" },
            { "subject": "RU-7ab", "teacher": "Sei" }
          ],
          "lessons": [
            {
              "id": 716,
              "name": "Band",
              "subject": "Band",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 114,
              "name": "DE",
              "subject": "DE",
              "group": null,
              "teacher": "Höl"
            },
            {
              "id": 115,
              "name": "EN",
              "subject": "EN",
              "group": null,
              "teacher": "Din"
            },
            {
              "id": 116,
              "name": "FR (FR-7a-7c)",
              "subject": "FR",
              "group": "FR-7a-7c",
              "teacher": "Kra"
            },
            {
              "id": 117,
              "name": "RU (RU-7ab)",
              "subject": "RU",
              "group": "RU-7ab",
              "teacher": "Sei"
            },
            {
              "id": 118,
              "name": "MA",
              "subject": "MA",
              "group": null,
              "teacher": "Gla"
            },
            {
              "id": 119,
              "name": "BIO",
              "subject": "BIO",
              "group": null,
              "teacher": "HoK"
            },
            {
              "id": 120,
              "name": "CH",
              "subject": "CH",
              "group": null,
              "teacher": "Das"
            },
            {
              "id": 121,
              "name": "PH",
              "subject": "PH",
              "group": null,
              "teacher": "Thi"
            },
            {
              "id": 122,
              "name": "GE",
              "subject": "GE",
              "group": null,
              "teacher": "Kie"
            },
            {
              "id": 123,
              "name": "GRW",
              "subject": "GRW",
              "group": null,
              "teacher": "Mar"
            },
            {
              "id": 124,
              "name": "GEO",
              "subject": "GEO",
              "group": null,
              "teacher": "Kön"
            },
            {
              "id": 125,
              "name": "SPO",
              "subject": "SPO",
              "group": null,
              "teacher": "Scg"
            },
            {
              "id": 126,
              "name": "REe (RE/e-st7)",
              "subject": "REe",
              "group": "RE/e-st7",
              "teacher": "Bru"
            },
            {
              "id": 127,
              "name": "REk (RE/k-st7)",
              "subject": "REk",
              "group": "RE/k-st7",
              "teacher": "Lüb"
            },
            {
              "id": 128,
              "name": "ETH (ETH-7ac)",
              "subject": "ETH",
              "group": "ETH-7ac",
              "teacher": "Zin"
            },
            {
              "id": 129,
              "name": "KU",
              "subject": "KU",
              "group": null,
              "teacher": "Süm"
            },
            {
              "id": 130,
              "name": "MU",
              "subject": "MU",
              "group": null,
              "teacher": "Gra"
            },
            {
              "id": 131,
              "name": "INF (INF-7a-1)",
              "subject": "INF",
              "group": "INF-7a-1",
              "teacher": "Shu"
            },
            {
              "id": 132,
              "name": "INF (INF-7a-2)",
              "subject": "INF",
              "group": "INF-7a-2",
              "teacher": "Gie"
            },
            {
              "id": 152,
              "name": "MUHG",
              "subject": "MUHG",
              "group": null,
              "teacher": "Gra"
            },
            {
              "id": 153,
              "name": "MUHG",
              "subject": "MUHG",
              "group": null,
              "teacher": "Gra"
            },
            {
              "id": 725,
              "name": "AG J",
              "subject": "AG J",
              "group": null,
              "teacher": "Göb"
            },
            {
              "id": 157,
              "name": "ETH (ETH-7ad)",
              "subject": "ETH",
              "group": "ETH-7ad",
              "teacher": "Zin"
            },
            {
              "id": 198,
              "name": "GE",
              "subject": "GE",
              "group": null,
              "teacher": "Kie"
            },
            {
              "id": 199,
              "name": "GEO",
              "subject": "GEO",
              "group": null,
              "teacher": "Kön"
            },
            {
              "id": 247,
              "name": "KiCH",
              "subject": "KiCH",
              "group": null,
              "teacher": "Gra"
            },
            {
              "id": 595,
              "name": "Jazz",
              "subject": "Jazz",
              "group": null,
              "teacher": "BoI"
            }
          ],
          "plannedLessons": [
            {
              "id": 121,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "PH" },
              "teacher": { "changed": false, "value": "Thi" },
              "room": { "changed": false, "value": "E1.19" },
              "schoolClass": "7a",
              "info": null
            },
            {
              "id": 129,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": true, "value": "KU" },
              "teacher": { "changed": true, "value": "Süm" },
              "room": { "changed": true, "value": "M1.05" },
              "schoolClass": "7a",
              "info": "verlegt von St.7, Raum geändert; GE Frau Kiermeyer gehalten am Fr (30.08.) St.2, Raum geändert"
            },
            {
              "id": 116,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "FR-7a-7c" },
              "teacher": { "changed": false, "value": "Kra" },
              "room": { "changed": false, "value": "E2.13" },
              "schoolClass": "7a",
              "info": null
            },
            {
              "id": 117,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "RU-7ab" },
              "teacher": { "changed": false, "value": "Sei" },
              "room": { "changed": false, "value": "E2.08" },
              "schoolClass": "7a",
              "info": null
            },
            {
              "id": 130,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "MU" },
              "teacher": { "changed": false, "value": "Gra" },
              "room": { "changed": false, "value": "S2.17" },
              "schoolClass": "7a",
              "info": null
            },
            {
              "id": 118,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Gla" },
              "room": { "changed": false, "value": "E0.12" },
              "schoolClass": "7a",
              "info": null
            },
            {
              "id": 114,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "Höl" },
              "room": { "changed": false, "value": "S1.17" },
              "schoolClass": "7a",
              "info": null
            },
            {
              "id": 129,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": true, "value": "---" },
              "teacher": { "changed": false, "value": null },
              "room": { "changed": false, "value": null },
              "schoolClass": "7a",
              "info": "KU Frau Süßmilch verlegt nach St.2, Raum geändert"
            }
          ]
        },
        {
          "name": "7b",
          "type": "schoolClass",
          "timetable": [
            {
              "id": 117,
              "name": "RU (RU-7ab)",
              "subject": "RU",
              "group": "RU-7ab",
              "teacher": "Sei"
            },
            {
              "id": 126,
              "name": "REe (RE/e-st7)",
              "subject": "REe",
              "group": "RE/e-st7",
              "teacher": "Bru"
            },
            {
              "id": 127,
              "name": "REk (RE/k-st7)",
              "subject": "REk",
              "group": "RE/k-st7",
              "teacher": "Lüb"
            },
            {
              "id": 133,
              "name": "DE",
              "subject": "DE",
              "group": null,
              "teacher": "Men"
            },
            {
              "id": 134,
              "name": "EN",
              "subject": "EN",
              "group": null,
              "teacher": "Sei"
            },
            {
              "id": 135,
              "name": "FR (FR-7b-7e)",
              "subject": "FR",
              "group": "FR-7b-7e",
              "teacher": "Ste"
            },
            {
              "id": 137,
              "name": "MA",
              "subject": "MA",
              "group": null,
              "teacher": "Thi"
            },
            {
              "id": 138,
              "name": "BIO",
              "subject": "BIO",
              "group": null,
              "teacher": "HoK"
            },
            {
              "id": 139,
              "name": "CH",
              "subject": "CH",
              "group": null,
              "teacher": "Das"
            },
            {
              "id": 140,
              "name": "PH",
              "subject": "PH",
              "group": null,
              "teacher": "Kok"
            },
            {
              "id": 141,
              "name": "GE",
              "subject": "GE",
              "group": null,
              "teacher": "Sca"
            },
            {
              "id": 142,
              "name": "GRW",
              "subject": "GRW",
              "group": null,
              "teacher": "Kie"
            },
            {
              "id": 143,
              "name": "GEO",
              "subject": "GEO",
              "group": null,
              "teacher": "Mar"
            },
            {
              "id": 144,
              "name": "SPO",
              "subject": "SPO",
              "group": null,
              "teacher": "BoM"
            },
            {
              "id": 150,
              "name": "INF (INF-7b-1)",
              "subject": "INF",
              "group": "INF-7b-1",
              "teacher": "Shu"
            },
            {
              "id": 151,
              "name": "INF (INF-7b-2)",
              "subject": "INF",
              "group": "INF-7b-2",
              "teacher": "Gie"
            },
            {
              "id": 147,
              "name": "ETH (ETH-7b)",
              "subject": "ETH",
              "group": "ETH-7b",
              "teacher": null
            },
            {
              "id": 148,
              "name": "KU",
              "subject": "KU",
              "group": null,
              "teacher": "Süm"
            },
            {
              "id": 149,
              "name": "MU",
              "subject": "MU",
              "group": null,
              "teacher": "Höl"
            },
            {
              "id": 725,
              "name": "AG J",
              "subject": "AG J",
              "group": null,
              "teacher": "Göb"
            },
            {
              "id": 599,
              "name": "LRS",
              "subject": "LRS",
              "group": null,
              "teacher": "Bru"
            },
            {
              "id": 595,
              "name": "Jazz",
              "subject": "Jazz",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": -1,
              "name": "ETH-7b",
              "subject": "ETH-7b",
              "teacher": null
            },
            {
              "id": -1,
              "name": "FR-7b-7e",
              "subject": "FR-7b-7e",
              "teacher": "Ste"
            },
            {
              "id": -1,
              "name": "INF-7b-1",
              "subject": "INF-7b-1",
              "teacher": "Shu"
            },
            {
              "id": -1,
              "name": "INF-7b-2",
              "subject": "INF-7b-2",
              "teacher": "Gie"
            },
            {
              "id": -1,
              "name": "RE/e-st7",
              "subject": "RE/e-st7",
              "teacher": "Bru"
            },
            {
              "id": -1,
              "name": "RE/k-st7",
              "subject": "RE/k-st7",
              "teacher": "Lüb"
            },
            {
              "id": -1,
              "name": "RU-7ab",
              "subject": "RU-7ab",
              "teacher": "Sei"
            }
          ],
          "courses": [
            { "subject": "ETH-7b", "teacher": null },
            { "subject": "FR-7b-7e", "teacher": "Ste" },
            { "subject": "INF-7b-1", "teacher": "Shu" },
            { "subject": "INF-7b-2", "teacher": "Gie" },
            { "subject": "RE/e-st7", "teacher": "Bru" },
            { "subject": "RE/k-st7", "teacher": "Lüb" },
            { "subject": "RU-7ab", "teacher": "Sei" }
          ],
          "lessons": [
            {
              "id": 117,
              "name": "RU (RU-7ab)",
              "subject": "RU",
              "group": "RU-7ab",
              "teacher": "Sei"
            },
            {
              "id": 126,
              "name": "REe (RE/e-st7)",
              "subject": "REe",
              "group": "RE/e-st7",
              "teacher": "Bru"
            },
            {
              "id": 127,
              "name": "REk (RE/k-st7)",
              "subject": "REk",
              "group": "RE/k-st7",
              "teacher": "Lüb"
            },
            {
              "id": 133,
              "name": "DE",
              "subject": "DE",
              "group": null,
              "teacher": "Men"
            },
            {
              "id": 134,
              "name": "EN",
              "subject": "EN",
              "group": null,
              "teacher": "Sei"
            },
            {
              "id": 135,
              "name": "FR (FR-7b-7e)",
              "subject": "FR",
              "group": "FR-7b-7e",
              "teacher": "Ste"
            },
            {
              "id": 137,
              "name": "MA",
              "subject": "MA",
              "group": null,
              "teacher": "Thi"
            },
            {
              "id": 138,
              "name": "BIO",
              "subject": "BIO",
              "group": null,
              "teacher": "HoK"
            },
            {
              "id": 139,
              "name": "CH",
              "subject": "CH",
              "group": null,
              "teacher": "Das"
            },
            {
              "id": 140,
              "name": "PH",
              "subject": "PH",
              "group": null,
              "teacher": "Kok"
            },
            {
              "id": 141,
              "name": "GE",
              "subject": "GE",
              "group": null,
              "teacher": "Sca"
            },
            {
              "id": 142,
              "name": "GRW",
              "subject": "GRW",
              "group": null,
              "teacher": "Kie"
            },
            {
              "id": 143,
              "name": "GEO",
              "subject": "GEO",
              "group": null,
              "teacher": "Mar"
            },
            {
              "id": 144,
              "name": "SPO",
              "subject": "SPO",
              "group": null,
              "teacher": "BoM"
            },
            {
              "id": 150,
              "name": "INF (INF-7b-1)",
              "subject": "INF",
              "group": "INF-7b-1",
              "teacher": "Shu"
            },
            {
              "id": 151,
              "name": "INF (INF-7b-2)",
              "subject": "INF",
              "group": "INF-7b-2",
              "teacher": "Gie"
            },
            {
              "id": 147,
              "name": "ETH (ETH-7b)",
              "subject": "ETH",
              "group": "ETH-7b",
              "teacher": null
            },
            {
              "id": 148,
              "name": "KU",
              "subject": "KU",
              "group": null,
              "teacher": "Süm"
            },
            {
              "id": 149,
              "name": "MU",
              "subject": "MU",
              "group": null,
              "teacher": "Höl"
            },
            {
              "id": 725,
              "name": "AG J",
              "subject": "AG J",
              "group": null,
              "teacher": "Göb"
            },
            {
              "id": 599,
              "name": "LRS",
              "subject": "LRS",
              "group": null,
              "teacher": "Bru"
            },
            {
              "id": 595,
              "name": "Jazz",
              "subject": "Jazz",
              "group": null,
              "teacher": "BoI"
            }
          ],
          "plannedLessons": [
            {
              "id": 140,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "PH" },
              "teacher": { "changed": false, "value": "Kok" },
              "room": { "changed": false, "value": "E1.18" },
              "schoolClass": "7b",
              "info": null
            },
            {
              "id": 137,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Thi" },
              "room": { "changed": false, "value": "E1.14" },
              "schoolClass": "7b",
              "info": null
            },
            {
              "id": 117,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "RU-7ab" },
              "teacher": { "changed": false, "value": "Sei" },
              "room": { "changed": false, "value": "E2.08" },
              "schoolClass": "7b",
              "info": null
            },
            {
              "id": 135,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "FR-7b-7e" },
              "teacher": { "changed": false, "value": "Ste" },
              "room": { "changed": false, "value": "E1.13" },
              "schoolClass": "7b",
              "info": null
            },
            {
              "id": 133,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "Men" },
              "room": { "changed": false, "value": "E0.07" },
              "schoolClass": "7b",
              "info": null
            },
            {
              "id": 142,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "GRW" },
              "teacher": { "changed": false, "value": "Kie" },
              "room": { "changed": false, "value": "E1.15" },
              "schoolClass": "7b",
              "info": null
            },
            {
              "id": 599,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "LRS" },
              "teacher": { "changed": false, "value": "Bru" },
              "room": { "changed": false, "value": "E1.13" },
              "schoolClass": "7b",
              "info": null
            }
          ]
        },
        {
          "name": "7c",
          "type": "schoolClass",
          "timetable": [
            {
              "id": 716,
              "name": "Band",
              "subject": "Band",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 116,
              "name": "FR (FR-7a-7c)",
              "subject": "FR",
              "group": "FR-7a-7c",
              "teacher": "Kra"
            },
            {
              "id": 126,
              "name": "REe (RE/e-st7)",
              "subject": "REe",
              "group": "RE/e-st7",
              "teacher": "Bru"
            },
            {
              "id": 127,
              "name": "REk (RE/k-st7)",
              "subject": "REk",
              "group": "RE/k-st7",
              "teacher": "Lüb"
            },
            {
              "id": 128,
              "name": "ETH (ETH-7ac)",
              "subject": "ETH",
              "group": "ETH-7ac",
              "teacher": "Zin"
            },
            {
              "id": 725,
              "name": "AG J",
              "subject": "AG J",
              "group": null,
              "teacher": "Göb"
            },
            {
              "id": 176,
              "name": "MU",
              "subject": "MU",
              "group": null,
              "teacher": "Höl"
            },
            {
              "id": 160,
              "name": "DE",
              "subject": "DE",
              "group": null,
              "teacher": "Süm"
            },
            {
              "id": 161,
              "name": "EN",
              "subject": "EN",
              "group": null,
              "teacher": "Scl"
            },
            {
              "id": 163,
              "name": "RU (Ru-7cde)",
              "subject": "RU",
              "group": "Ru-7cde",
              "teacher": "Küh"
            },
            {
              "id": 164,
              "name": "MA",
              "subject": "MA",
              "group": null,
              "teacher": "Das"
            },
            {
              "id": 165,
              "name": "BIO",
              "subject": "BIO",
              "group": null,
              "teacher": "HoK"
            },
            {
              "id": 166,
              "name": "CH",
              "subject": "CH",
              "group": null,
              "teacher": "Das"
            },
            {
              "id": 167,
              "name": "PH",
              "subject": "PH",
              "group": null,
              "teacher": "Gün"
            },
            {
              "id": 168,
              "name": "GE",
              "subject": "GE",
              "group": null,
              "teacher": "Sca"
            },
            {
              "id": 169,
              "name": "GRW",
              "subject": "GRW",
              "group": null,
              "teacher": "Len"
            },
            {
              "id": 170,
              "name": "GEO",
              "subject": "GEO",
              "group": null,
              "teacher": "Mar"
            },
            {
              "id": 171,
              "name": "SPO",
              "subject": "SPO",
              "group": null,
              "teacher": "Mel"
            },
            {
              "id": 172,
              "name": "INF (INF-7c-1)",
              "subject": "INF",
              "group": "INF-7c-1",
              "teacher": "Shu"
            },
            {
              "id": 173,
              "name": "INF (INF-7c-2)",
              "subject": "INF",
              "group": "INF-7c-2",
              "teacher": "Gie"
            },
            {
              "id": 175,
              "name": "KU",
              "subject": "KU",
              "group": null,
              "teacher": "Süm"
            },
            {
              "id": 200,
              "name": "FR (FR-7c-7d)",
              "subject": "FR",
              "group": "FR-7c-7d",
              "teacher": "Lüb"
            },
            {
              "id": 452,
              "name": "Int",
              "subject": "Int",
              "group": null,
              "teacher": "Sch"
            },
            {
              "id": 599,
              "name": "LRS",
              "subject": "LRS",
              "group": null,
              "teacher": "Bru"
            },
            {
              "id": 595,
              "name": "Jazz",
              "subject": "Jazz",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": -1,
              "name": "ETH-7ac",
              "subject": "ETH-7ac",
              "teacher": "Zin"
            },
            {
              "id": -1,
              "name": "FR-7a-7c",
              "subject": "FR-7a-7c",
              "teacher": "Kra"
            },
            {
              "id": -1,
              "name": "FR-7c-7d",
              "subject": "FR-7c-7d",
              "teacher": "Lüb"
            },
            {
              "id": -1,
              "name": "INF-7c-1",
              "subject": "INF-7c-1",
              "teacher": "Shu"
            },
            {
              "id": -1,
              "name": "INF-7c-2",
              "subject": "INF-7c-2",
              "teacher": "Gie"
            },
            {
              "id": -1,
              "name": "RE/e-st7",
              "subject": "RE/e-st7",
              "teacher": "Bru"
            },
            {
              "id": -1,
              "name": "RE/k-st7",
              "subject": "RE/k-st7",
              "teacher": "Lüb"
            },
            {
              "id": -1,
              "name": "Ru-7cde",
              "subject": "Ru-7cde",
              "teacher": "Küh"
            }
          ],
          "courses": [
            { "subject": "ETH-7ac", "teacher": "Zin" },
            { "subject": "FR-7a-7c", "teacher": "Kra" },
            { "subject": "FR-7c-7d", "teacher": "Lüb" },
            { "subject": "INF-7c-1", "teacher": "Shu" },
            { "subject": "INF-7c-2", "teacher": "Gie" },
            { "subject": "RE/e-st7", "teacher": "Bru" },
            { "subject": "RE/k-st7", "teacher": "Lüb" },
            { "subject": "Ru-7cde", "teacher": "Küh" }
          ],
          "lessons": [
            {
              "id": 716,
              "name": "Band",
              "subject": "Band",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 116,
              "name": "FR (FR-7a-7c)",
              "subject": "FR",
              "group": "FR-7a-7c",
              "teacher": "Kra"
            },
            {
              "id": 126,
              "name": "REe (RE/e-st7)",
              "subject": "REe",
              "group": "RE/e-st7",
              "teacher": "Bru"
            },
            {
              "id": 127,
              "name": "REk (RE/k-st7)",
              "subject": "REk",
              "group": "RE/k-st7",
              "teacher": "Lüb"
            },
            {
              "id": 128,
              "name": "ETH (ETH-7ac)",
              "subject": "ETH",
              "group": "ETH-7ac",
              "teacher": "Zin"
            },
            {
              "id": 725,
              "name": "AG J",
              "subject": "AG J",
              "group": null,
              "teacher": "Göb"
            },
            {
              "id": 176,
              "name": "MU",
              "subject": "MU",
              "group": null,
              "teacher": "Höl"
            },
            {
              "id": 160,
              "name": "DE",
              "subject": "DE",
              "group": null,
              "teacher": "Süm"
            },
            {
              "id": 161,
              "name": "EN",
              "subject": "EN",
              "group": null,
              "teacher": "Scl"
            },
            {
              "id": 163,
              "name": "RU (Ru-7cde)",
              "subject": "RU",
              "group": "Ru-7cde",
              "teacher": "Küh"
            },
            {
              "id": 164,
              "name": "MA",
              "subject": "MA",
              "group": null,
              "teacher": "Das"
            },
            {
              "id": 165,
              "name": "BIO",
              "subject": "BIO",
              "group": null,
              "teacher": "HoK"
            },
            {
              "id": 166,
              "name": "CH",
              "subject": "CH",
              "group": null,
              "teacher": "Das"
            },
            {
              "id": 167,
              "name": "PH",
              "subject": "PH",
              "group": null,
              "teacher": "Gün"
            },
            {
              "id": 168,
              "name": "GE",
              "subject": "GE",
              "group": null,
              "teacher": "Sca"
            },
            {
              "id": 169,
              "name": "GRW",
              "subject": "GRW",
              "group": null,
              "teacher": "Len"
            },
            {
              "id": 170,
              "name": "GEO",
              "subject": "GEO",
              "group": null,
              "teacher": "Mar"
            },
            {
              "id": 171,
              "name": "SPO",
              "subject": "SPO",
              "group": null,
              "teacher": "Mel"
            },
            {
              "id": 172,
              "name": "INF (INF-7c-1)",
              "subject": "INF",
              "group": "INF-7c-1",
              "teacher": "Shu"
            },
            {
              "id": 173,
              "name": "INF (INF-7c-2)",
              "subject": "INF",
              "group": "INF-7c-2",
              "teacher": "Gie"
            },
            {
              "id": 175,
              "name": "KU",
              "subject": "KU",
              "group": null,
              "teacher": "Süm"
            },
            {
              "id": 200,
              "name": "FR (FR-7c-7d)",
              "subject": "FR",
              "group": "FR-7c-7d",
              "teacher": "Lüb"
            },
            {
              "id": 452,
              "name": "Int",
              "subject": "Int",
              "group": null,
              "teacher": "Sch"
            },
            {
              "id": 599,
              "name": "LRS",
              "subject": "LRS",
              "group": null,
              "teacher": "Bru"
            },
            {
              "id": 595,
              "name": "Jazz",
              "subject": "Jazz",
              "group": null,
              "teacher": "BoI"
            }
          ],
          "plannedLessons": [
            {
              "id": 164,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Das" },
              "room": { "changed": false, "value": "E1.12" },
              "schoolClass": "7c",
              "info": null
            },
            {
              "id": 164,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Das" },
              "room": { "changed": false, "value": "E1.12" },
              "schoolClass": "7c",
              "info": null
            },
            {
              "id": 116,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "FR-7a-7c" },
              "teacher": { "changed": false, "value": "Kra" },
              "room": { "changed": false, "value": "E2.13" },
              "schoolClass": "7c",
              "info": null
            },
            {
              "id": 163,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "Ru-7cde" },
              "teacher": { "changed": false, "value": "Küh" },
              "room": { "changed": false, "value": "E1.12" },
              "schoolClass": "7c",
              "info": null
            },
            {
              "id": 200,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": true, "value": "SPO" },
              "teacher": { "changed": true, "value": "Mel" },
              "room": { "changed": true, "value": "TH 2" },
              "schoolClass": "7c",
              "info": "für FR Frau Lübke, Vertretung"
            },
            {
              "id": 167,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "PH" },
              "teacher": { "changed": false, "value": "Gün" },
              "room": { "changed": false, "value": "E1.19" },
              "schoolClass": "7c",
              "info": null
            },
            {
              "id": 176,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "MU" },
              "teacher": { "changed": false, "value": "Höl" },
              "room": { "changed": false, "value": "S1.17" },
              "schoolClass": "7c",
              "info": null
            },
            {
              "id": 160,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "Süm" },
              "room": { "changed": false, "value": "M1.05" },
              "schoolClass": "7c",
              "info": null
            },
            {
              "id": 452,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "Int" },
              "teacher": { "changed": false, "value": "Sch" },
              "room": { "changed": false, "value": "E0.08" },
              "schoolClass": "7c",
              "info": null
            },
            {
              "id": 599,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "LRS" },
              "teacher": { "changed": false, "value": "Bru" },
              "room": { "changed": false, "value": "E1.13" },
              "schoolClass": "7c",
              "info": null
            }
          ]
        },
        {
          "name": "7d",
          "type": "schoolClass",
          "timetable": [
            {
              "id": 126,
              "name": "REe (RE/e-st7)",
              "subject": "REe",
              "group": "RE/e-st7",
              "teacher": "Bru"
            },
            {
              "id": 127,
              "name": "REk (RE/k-st7)",
              "subject": "REk",
              "group": "RE/k-st7",
              "teacher": "Lüb"
            },
            {
              "id": 193,
              "name": "GEO",
              "subject": "GEO",
              "group": null,
              "teacher": "Mar"
            },
            {
              "id": 725,
              "name": "AG J",
              "subject": "AG J",
              "group": null,
              "teacher": "Göb"
            },
            {
              "id": 157,
              "name": "ETH (ETH-7ad)",
              "subject": "ETH",
              "group": "ETH-7ad",
              "teacher": "Zin"
            },
            {
              "id": 194,
              "name": "SPO",
              "subject": "SPO",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 163,
              "name": "RU (Ru-7cde)",
              "subject": "RU",
              "group": "Ru-7cde",
              "teacher": "Küh"
            },
            {
              "id": 196,
              "name": "INF (INF-7d-1)",
              "subject": "INF",
              "group": "INF-7d-1",
              "teacher": "Shu"
            },
            {
              "id": 197,
              "name": "KU",
              "subject": "KU",
              "group": null,
              "teacher": "Süm"
            },
            {
              "id": 195,
              "name": "INF (INF-7d-2)",
              "subject": "INF",
              "group": "INF-7d-2",
              "teacher": "Gie"
            },
            {
              "id": 181,
              "name": "MU",
              "subject": "MU",
              "group": null,
              "teacher": "Paw"
            },
            {
              "id": 183,
              "name": "DE",
              "subject": "DE",
              "group": null,
              "teacher": "Lin"
            },
            {
              "id": 184,
              "name": "EN",
              "subject": "EN",
              "group": null,
              "teacher": "Sei"
            },
            {
              "id": 200,
              "name": "FR (FR-7c-7d)",
              "subject": "FR",
              "group": "FR-7c-7d",
              "teacher": "Lüb"
            },
            {
              "id": 187,
              "name": "MA",
              "subject": "MA",
              "group": null,
              "teacher": "Vet"
            },
            {
              "id": 188,
              "name": "BIO",
              "subject": "BIO",
              "group": null,
              "teacher": "HoK"
            },
            {
              "id": 189,
              "name": "CH",
              "subject": "CH",
              "group": null,
              "teacher": "Das"
            },
            {
              "id": 190,
              "name": "PH",
              "subject": "PH",
              "group": null,
              "teacher": "Thi"
            },
            {
              "id": 191,
              "name": "GE",
              "subject": "GE",
              "group": null,
              "teacher": "Sca"
            },
            {
              "id": 192,
              "name": "GRW",
              "subject": "GRW",
              "group": null,
              "teacher": "Len"
            },
            {
              "id": 599,
              "name": "LRS",
              "subject": "LRS",
              "group": null,
              "teacher": "Bru"
            },
            {
              "id": 595,
              "name": "Jazz",
              "subject": "Jazz",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": -1,
              "name": "ETH-7ad",
              "subject": "ETH-7ad",
              "teacher": "Zin"
            },
            {
              "id": -1,
              "name": "FR-7c-7d",
              "subject": "FR-7c-7d",
              "teacher": "Lüb"
            },
            {
              "id": -1,
              "name": "INF-7d-1",
              "subject": "INF-7d-1",
              "teacher": "Shu"
            },
            {
              "id": -1,
              "name": "INF-7d-2",
              "subject": "INF-7d-2",
              "teacher": "Gie"
            },
            {
              "id": -1,
              "name": "RE/e-st7",
              "subject": "RE/e-st7",
              "teacher": "Bru"
            },
            {
              "id": -1,
              "name": "RE/k-st7",
              "subject": "RE/k-st7",
              "teacher": "Lüb"
            },
            {
              "id": -1,
              "name": "Ru-7cde",
              "subject": "Ru-7cde",
              "teacher": "Küh"
            }
          ],
          "courses": [
            { "subject": "ETH-7ad", "teacher": "Zin" },
            { "subject": "FR-7c-7d", "teacher": "Lüb" },
            { "subject": "INF-7d-1", "teacher": "Shu" },
            { "subject": "INF-7d-2", "teacher": "Gie" },
            { "subject": "RE/e-st7", "teacher": "Bru" },
            { "subject": "RE/k-st7", "teacher": "Lüb" },
            { "subject": "Ru-7cde", "teacher": "Küh" }
          ],
          "lessons": [
            {
              "id": 126,
              "name": "REe (RE/e-st7)",
              "subject": "REe",
              "group": "RE/e-st7",
              "teacher": "Bru"
            },
            {
              "id": 127,
              "name": "REk (RE/k-st7)",
              "subject": "REk",
              "group": "RE/k-st7",
              "teacher": "Lüb"
            },
            {
              "id": 193,
              "name": "GEO",
              "subject": "GEO",
              "group": null,
              "teacher": "Mar"
            },
            {
              "id": 725,
              "name": "AG J",
              "subject": "AG J",
              "group": null,
              "teacher": "Göb"
            },
            {
              "id": 157,
              "name": "ETH (ETH-7ad)",
              "subject": "ETH",
              "group": "ETH-7ad",
              "teacher": "Zin"
            },
            {
              "id": 194,
              "name": "SPO",
              "subject": "SPO",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 163,
              "name": "RU (Ru-7cde)",
              "subject": "RU",
              "group": "Ru-7cde",
              "teacher": "Küh"
            },
            {
              "id": 196,
              "name": "INF (INF-7d-1)",
              "subject": "INF",
              "group": "INF-7d-1",
              "teacher": "Shu"
            },
            {
              "id": 197,
              "name": "KU",
              "subject": "KU",
              "group": null,
              "teacher": "Süm"
            },
            {
              "id": 195,
              "name": "INF (INF-7d-2)",
              "subject": "INF",
              "group": "INF-7d-2",
              "teacher": "Gie"
            },
            {
              "id": 181,
              "name": "MU",
              "subject": "MU",
              "group": null,
              "teacher": "Paw"
            },
            {
              "id": 183,
              "name": "DE",
              "subject": "DE",
              "group": null,
              "teacher": "Lin"
            },
            {
              "id": 184,
              "name": "EN",
              "subject": "EN",
              "group": null,
              "teacher": "Sei"
            },
            {
              "id": 200,
              "name": "FR (FR-7c-7d)",
              "subject": "FR",
              "group": "FR-7c-7d",
              "teacher": "Lüb"
            },
            {
              "id": 187,
              "name": "MA",
              "subject": "MA",
              "group": null,
              "teacher": "Vet"
            },
            {
              "id": 188,
              "name": "BIO",
              "subject": "BIO",
              "group": null,
              "teacher": "HoK"
            },
            {
              "id": 189,
              "name": "CH",
              "subject": "CH",
              "group": null,
              "teacher": "Das"
            },
            {
              "id": 190,
              "name": "PH",
              "subject": "PH",
              "group": null,
              "teacher": "Thi"
            },
            {
              "id": 191,
              "name": "GE",
              "subject": "GE",
              "group": null,
              "teacher": "Sca"
            },
            {
              "id": 192,
              "name": "GRW",
              "subject": "GRW",
              "group": null,
              "teacher": "Len"
            },
            {
              "id": 599,
              "name": "LRS",
              "subject": "LRS",
              "group": null,
              "teacher": "Bru"
            },
            {
              "id": 595,
              "name": "Jazz",
              "subject": "Jazz",
              "group": null,
              "teacher": "BoI"
            }
          ],
          "plannedLessons": [
            {
              "id": 192,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "GRW" },
              "teacher": { "changed": false, "value": "Len" },
              "room": { "changed": false, "value": "E1.14" },
              "schoolClass": "7d",
              "info": null
            },
            {
              "id": 191,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "GE" },
              "teacher": { "changed": false, "value": "Sca" },
              "room": { "changed": false, "value": "M1.08" },
              "schoolClass": "7d",
              "info": null
            },
            {
              "id": 163,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "Ru-7cde" },
              "teacher": { "changed": false, "value": "Küh" },
              "room": { "changed": false, "value": "E1.12" },
              "schoolClass": "7d",
              "info": null
            },
            {
              "id": 200,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": true, "value": "SPO" },
              "teacher": { "changed": true, "value": "Mel" },
              "room": { "changed": true, "value": "TH 2" },
              "schoolClass": "7d",
              "info": "für FR Frau Lübke, Vertretung"
            },
            {
              "id": 193,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "GEO" },
              "teacher": { "changed": false, "value": "Mar" },
              "room": { "changed": false, "value": "E0.14" },
              "schoolClass": "7d",
              "info": null
            },
            {
              "id": 183,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "Lin" },
              "room": { "changed": false, "value": "A0.09" },
              "schoolClass": "7d",
              "info": null
            },
            {
              "id": 599,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "LRS" },
              "teacher": { "changed": false, "value": "Bru" },
              "room": { "changed": false, "value": "E1.13" },
              "schoolClass": "7d",
              "info": null
            }
          ]
        },
        {
          "name": "7e",
          "type": "schoolClass",
          "timetable": [
            {
              "id": 126,
              "name": "REe (RE/e-st7)",
              "subject": "REe",
              "group": "RE/e-st7",
              "teacher": "Bru"
            },
            {
              "id": 127,
              "name": "REk (RE/k-st7)",
              "subject": "REk",
              "group": "RE/k-st7",
              "teacher": "Lüb"
            },
            {
              "id": 135,
              "name": "FR (FR-7b-7e)",
              "subject": "FR",
              "group": "FR-7b-7e",
              "teacher": "Ste"
            },
            {
              "id": 725,
              "name": "AG J",
              "subject": "AG J",
              "group": null,
              "teacher": "Göb"
            },
            {
              "id": 163,
              "name": "RU (Ru-7cde)",
              "subject": "RU",
              "group": "Ru-7cde",
              "teacher": "Küh"
            },
            {
              "id": 218,
              "name": "CH",
              "subject": "CH",
              "group": null,
              "teacher": "Das"
            },
            {
              "id": 219,
              "name": "PH",
              "subject": "PH",
              "group": null,
              "teacher": "Gün"
            },
            {
              "id": 203,
              "name": "GEO",
              "subject": "GEO",
              "group": null,
              "teacher": "Mel"
            },
            {
              "id": 204,
              "name": "ETH (ETH-7e)",
              "subject": "ETH",
              "group": "ETH-7e",
              "teacher": null
            },
            {
              "id": 205,
              "name": "SPO",
              "subject": "SPO",
              "group": null,
              "teacher": "HoS"
            },
            {
              "id": 221,
              "name": "GRW",
              "subject": "GRW",
              "group": null,
              "teacher": "Kie"
            },
            {
              "id": 207,
              "name": "INF (INF-7e-1)",
              "subject": "INF",
              "group": "INF-7e-1",
              "teacher": "Shu"
            },
            {
              "id": 208,
              "name": "KU",
              "subject": "KU",
              "group": null,
              "teacher": "Süm"
            },
            {
              "id": 209,
              "name": "INF (INF-7e-2)",
              "subject": "INF",
              "group": "INF-7e-2",
              "teacher": "Gie"
            },
            {
              "id": 210,
              "name": "MU",
              "subject": "MU",
              "group": null,
              "teacher": "Paw"
            },
            {
              "id": 212,
              "name": "DE",
              "subject": "DE",
              "group": null,
              "teacher": "Leh"
            },
            {
              "id": 213,
              "name": "EN",
              "subject": "EN",
              "group": null,
              "teacher": "Kle"
            },
            {
              "id": 220,
              "name": "GE",
              "subject": "GE",
              "group": null,
              "teacher": "Sca"
            },
            {
              "id": 217,
              "name": "BIO",
              "subject": "BIO",
              "group": null,
              "teacher": "HoK"
            },
            {
              "id": 216,
              "name": "MA",
              "subject": "MA",
              "group": null,
              "teacher": "Kok"
            },
            {
              "id": 595,
              "name": "Jazz",
              "subject": "Jazz",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": -1,
              "name": "ETH-7e",
              "subject": "ETH-7e",
              "teacher": null
            },
            {
              "id": -1,
              "name": "FR-7b-7e",
              "subject": "FR-7b-7e",
              "teacher": "Ste"
            },
            {
              "id": -1,
              "name": "INF-7e-1",
              "subject": "INF-7e-1",
              "teacher": "Shu"
            },
            {
              "id": -1,
              "name": "INF-7e-2",
              "subject": "INF-7e-2",
              "teacher": "Gie"
            },
            {
              "id": -1,
              "name": "RE/e-st7",
              "subject": "RE/e-st7",
              "teacher": "Bru"
            },
            {
              "id": -1,
              "name": "RE/k-st7",
              "subject": "RE/k-st7",
              "teacher": "Lüb"
            },
            {
              "id": -1,
              "name": "Ru-7cde",
              "subject": "Ru-7cde",
              "teacher": "Küh"
            }
          ],
          "courses": [
            { "subject": "ETH-7e", "teacher": null },
            { "subject": "FR-7b-7e", "teacher": "Ste" },
            { "subject": "INF-7e-1", "teacher": "Shu" },
            { "subject": "INF-7e-2", "teacher": "Gie" },
            { "subject": "RE/e-st7", "teacher": "Bru" },
            { "subject": "RE/k-st7", "teacher": "Lüb" },
            { "subject": "Ru-7cde", "teacher": "Küh" }
          ],
          "lessons": [
            {
              "id": 126,
              "name": "REe (RE/e-st7)",
              "subject": "REe",
              "group": "RE/e-st7",
              "teacher": "Bru"
            },
            {
              "id": 127,
              "name": "REk (RE/k-st7)",
              "subject": "REk",
              "group": "RE/k-st7",
              "teacher": "Lüb"
            },
            {
              "id": 135,
              "name": "FR (FR-7b-7e)",
              "subject": "FR",
              "group": "FR-7b-7e",
              "teacher": "Ste"
            },
            {
              "id": 725,
              "name": "AG J",
              "subject": "AG J",
              "group": null,
              "teacher": "Göb"
            },
            {
              "id": 163,
              "name": "RU (Ru-7cde)",
              "subject": "RU",
              "group": "Ru-7cde",
              "teacher": "Küh"
            },
            {
              "id": 218,
              "name": "CH",
              "subject": "CH",
              "group": null,
              "teacher": "Das"
            },
            {
              "id": 219,
              "name": "PH",
              "subject": "PH",
              "group": null,
              "teacher": "Gün"
            },
            {
              "id": 203,
              "name": "GEO",
              "subject": "GEO",
              "group": null,
              "teacher": "Mel"
            },
            {
              "id": 204,
              "name": "ETH (ETH-7e)",
              "subject": "ETH",
              "group": "ETH-7e",
              "teacher": null
            },
            {
              "id": 205,
              "name": "SPO",
              "subject": "SPO",
              "group": null,
              "teacher": "HoS"
            },
            {
              "id": 221,
              "name": "GRW",
              "subject": "GRW",
              "group": null,
              "teacher": "Kie"
            },
            {
              "id": 207,
              "name": "INF (INF-7e-1)",
              "subject": "INF",
              "group": "INF-7e-1",
              "teacher": "Shu"
            },
            {
              "id": 208,
              "name": "KU",
              "subject": "KU",
              "group": null,
              "teacher": "Süm"
            },
            {
              "id": 209,
              "name": "INF (INF-7e-2)",
              "subject": "INF",
              "group": "INF-7e-2",
              "teacher": "Gie"
            },
            {
              "id": 210,
              "name": "MU",
              "subject": "MU",
              "group": null,
              "teacher": "Paw"
            },
            {
              "id": 212,
              "name": "DE",
              "subject": "DE",
              "group": null,
              "teacher": "Leh"
            },
            {
              "id": 213,
              "name": "EN",
              "subject": "EN",
              "group": null,
              "teacher": "Kle"
            },
            {
              "id": 220,
              "name": "GE",
              "subject": "GE",
              "group": null,
              "teacher": "Sca"
            },
            {
              "id": 217,
              "name": "BIO",
              "subject": "BIO",
              "group": null,
              "teacher": "HoK"
            },
            {
              "id": 216,
              "name": "MA",
              "subject": "MA",
              "group": null,
              "teacher": "Kok"
            },
            {
              "id": 595,
              "name": "Jazz",
              "subject": "Jazz",
              "group": null,
              "teacher": "BoI"
            }
          ],
          "plannedLessons": [
            {
              "id": 207,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": true, "value": "---" },
              "teacher": { "changed": true, "value": null },
              "room": { "changed": true, "value": null },
              "schoolClass": "7e",
              "info": "INF-7e-1 Frau Schuppan fällt aus"
            },
            {
              "id": "209+",
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "INF" },
              "teacher": { "changed": false, "value": "Gie" },
              "room": { "changed": true, "value": "S2.15" },
              "schoolClass": "7e",
              "info": "gesamte Klasse 7e, Raum geändert"
            },
            {
              "id": 212,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "Leh" },
              "room": { "changed": false, "value": "E2.09" },
              "schoolClass": "7e",
              "info": null
            },
            {
              "id": 135,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "FR-7b-7e" },
              "teacher": { "changed": false, "value": "Ste" },
              "room": { "changed": false, "value": "E1.13" },
              "schoolClass": "7e",
              "info": null
            },
            {
              "id": 163,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "Ru-7cde" },
              "teacher": { "changed": false, "value": "Küh" },
              "room": { "changed": false, "value": "E1.12" },
              "schoolClass": "7e",
              "info": null
            },
            {
              "id": 216,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Kok" },
              "room": { "changed": false, "value": "E0.08" },
              "schoolClass": "7e",
              "info": null
            },
            {
              "id": 203,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "GEO" },
              "teacher": { "changed": false, "value": "Mel" },
              "room": { "changed": false, "value": "E0.09" },
              "schoolClass": "7e",
              "info": null
            },
            {
              "id": 221,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "GRW" },
              "teacher": { "changed": false, "value": "Kie" },
              "room": { "changed": false, "value": "E2.14" },
              "schoolClass": "7e",
              "info": null
            }
          ]
        },
        {
          "name": "8 Fö",
          "type": "schoolClass",
          "timetable": [
            {
              "id": 848,
              "name": "FÖ",
              "subject": "FÖ",
              "group": null,
              "teacher": "Lie"
            }
          ],
          "courses": [],
          "lessons": [
            {
              "id": 848,
              "name": "FÖ",
              "subject": "FÖ",
              "group": null,
              "teacher": "Lie"
            }
          ],
          "plannedLessons": []
        },
        {
          "name": "8 Kla",
          "type": "schoolClass",
          "timetable": [
            {
              "id": 854,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Bän"
            },
            {
              "id": 855,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Bän"
            },
            {
              "id": 856,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Sca"
            },
            {
              "id": 857,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Sca"
            },
            {
              "id": 861,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Paw"
            },
            {
              "id": 862,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Paw"
            },
            {
              "id": 863,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Paw"
            },
            {
              "id": 883,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Bän"
            }
          ],
          "courses": [],
          "lessons": [
            {
              "id": 854,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Bän"
            },
            {
              "id": 855,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Bän"
            },
            {
              "id": 856,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Sca"
            },
            {
              "id": 857,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Sca"
            },
            {
              "id": 861,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Paw"
            },
            {
              "id": 862,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Paw"
            },
            {
              "id": 863,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Paw"
            },
            {
              "id": 883,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Bän"
            }
          ],
          "plannedLessons": [
            {
              "id": 883,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "Kla" },
              "teacher": { "changed": false, "value": "Bän" },
              "room": { "changed": false, "value": null },
              "schoolClass": "8 Kla",
              "info": null
            },
            {
              "id": 857,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "Kla" },
              "teacher": { "changed": false, "value": "Sca" },
              "room": { "changed": false, "value": null },
              "schoolClass": "8 Kla",
              "info": null
            }
          ]
        },
        {
          "name": "8a",
          "type": "schoolClass",
          "timetable": [
            {
              "id": 773,
              "name": "ACHM2 (achoM2)",
              "subject": "ACHM2",
              "group": "achoM2",
              "teacher": "Kus"
            },
            {
              "id": 772,
              "name": "ACHJ2 (achoJ2)",
              "subject": "ACHJ2",
              "group": "achoJ2",
              "teacher": "Lie"
            },
            {
              "id": 725,
              "name": "AG J",
              "subject": "AG J",
              "group": null,
              "teacher": "Göb"
            },
            {
              "id": 222,
              "name": "DE",
              "subject": "DE",
              "group": null,
              "teacher": "Len"
            },
            {
              "id": 223,
              "name": "EN",
              "subject": "EN",
              "group": null,
              "teacher": "Sei"
            },
            {
              "id": 224,
              "name": "FR (FR-8a-8b)",
              "subject": "FR",
              "group": "FR-8a-8b",
              "teacher": "Ste"
            },
            {
              "id": 225,
              "name": "RU (RU-st8)",
              "subject": "RU",
              "group": "RU-st8",
              "teacher": "Men"
            },
            {
              "id": 226,
              "name": "MA",
              "subject": "MA",
              "group": null,
              "teacher": "Ber"
            },
            {
              "id": 227,
              "name": "BIO",
              "subject": "BIO",
              "group": null,
              "teacher": "HoK"
            },
            {
              "id": 228,
              "name": "CH",
              "subject": "CH",
              "group": null,
              "teacher": "Bro"
            },
            {
              "id": 229,
              "name": "PH",
              "subject": "PH",
              "group": null,
              "teacher": "Thi"
            },
            {
              "id": 230,
              "name": "GE",
              "subject": "GE",
              "group": null,
              "teacher": "Pol"
            },
            {
              "id": 231,
              "name": "GRW",
              "subject": "GRW",
              "group": null,
              "teacher": "Len"
            },
            {
              "id": 232,
              "name": "GEO",
              "subject": "GEO",
              "group": null,
              "teacher": "Kön"
            },
            {
              "id": 233,
              "name": "SPOw (SPw-8ab)",
              "subject": "SPOw",
              "group": "SPw-8ab",
              "teacher": "BoM"
            },
            {
              "id": 234,
              "name": "REe (RE/e-st8)",
              "subject": "REe",
              "group": "RE/e-st8",
              "teacher": "Bru"
            },
            {
              "id": 235,
              "name": "REk (RE/k-st8)",
              "subject": "REk",
              "group": "RE/k-st8",
              "teacher": "Lüb"
            },
            {
              "id": 236,
              "name": "ETH (ETH-8ab)",
              "subject": "ETH",
              "group": "ETH-8ab",
              "teacher": "Zin"
            },
            {
              "id": 237,
              "name": "KU",
              "subject": "KU",
              "group": null,
              "teacher": "Süm"
            },
            {
              "id": 238,
              "name": "MU",
              "subject": "MU",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 239,
              "name": "INF",
              "subject": "INF",
              "group": null,
              "teacher": "Shu"
            },
            {
              "id": 249,
              "name": "SPOm (SPm-8ac)",
              "subject": "SPOm",
              "group": "SPm-8ac",
              "teacher": "Mel"
            },
            {
              "id": 242,
              "name": "STIB",
              "subject": "STIB",
              "group": null,
              "teacher": "Scö"
            },
            {
              "id": 248,
              "name": "SPOw (SPw-8ac)",
              "subject": "SPOw",
              "group": "SPw-8ac",
              "teacher": "Göb"
            },
            {
              "id": 441,
              "name": "I-RU",
              "subject": "I-RU",
              "group": null,
              "teacher": "Ste"
            },
            {
              "id": 451,
              "name": "STIB",
              "subject": "STIB",
              "group": null,
              "teacher": "Scö"
            },
            {
              "id": 449,
              "name": "MUHG",
              "subject": "MUHG",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 450,
              "name": "MUHG",
              "subject": "MUHG",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 456,
              "name": "LAT (LA-st8)",
              "subject": "LAT",
              "group": "LA-st8",
              "teacher": "Kie"
            },
            {
              "id": 600,
              "name": "LRS",
              "subject": "LRS",
              "group": null,
              "teacher": "Bru"
            },
            {
              "id": 615,
              "name": "CHJ (choJ)",
              "subject": "CHJ",
              "group": "choJ",
              "teacher": "CHLJ"
            },
            {
              "id": 616,
              "name": "CHM (choM)",
              "subject": "CHM",
              "group": "choM",
              "teacher": "CHLM"
            },
            {
              "id": 617,
              "name": "ENS2 (ens2)",
              "subject": "ENS2",
              "group": "ens2",
              "teacher": "Sca"
            },
            {
              "id": 785,
              "name": "ACHM2 (achoM2)",
              "subject": "ACHM2",
              "group": "achoM2",
              "teacher": "Kus"
            },
            {
              "id": 784,
              "name": "ACHJ2 (achoJ2)",
              "subject": "ACHJ2",
              "group": "achoJ2",
              "teacher": "Lie"
            },
            {
              "id": 595,
              "name": "Jazz",
              "subject": "Jazz",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 717,
              "name": "Band",
              "subject": "Band",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 799,
              "name": "MA",
              "subject": "MA",
              "group": null,
              "teacher": "Ber"
            },
            {
              "id": 885,
              "name": "REk",
              "subject": "REk",
              "group": null,
              "teacher": null
            },
            {
              "id": -1,
              "name": "achoJ2",
              "subject": "achoJ2",
              "teacher": "Lie"
            },
            {
              "id": -1,
              "name": "achoM2",
              "subject": "achoM2",
              "teacher": "Kus"
            },
            { "id": -1, "name": "choJ", "subject": "choJ", "teacher": "CHLJ" },
            { "id": -1, "name": "choM", "subject": "choM", "teacher": "CHLM" },
            { "id": -1, "name": "ens2", "subject": "ens2", "teacher": "Sca" },
            {
              "id": -1,
              "name": "ETH-8ab",
              "subject": "ETH-8ab",
              "teacher": "Zin"
            },
            {
              "id": -1,
              "name": "FR-8a-8b",
              "subject": "FR-8a-8b",
              "teacher": "Ste"
            },
            {
              "id": -1,
              "name": "LA-st8",
              "subject": "LA-st8",
              "teacher": "Kie"
            },
            {
              "id": -1,
              "name": "RE/e-st8",
              "subject": "RE/e-st8",
              "teacher": "Bru"
            },
            {
              "id": -1,
              "name": "RE/k-st8",
              "subject": "RE/k-st8",
              "teacher": "Lüb"
            },
            {
              "id": -1,
              "name": "RU-st8",
              "subject": "RU-st8",
              "teacher": "Men"
            },
            {
              "id": -1,
              "name": "SPm-8ac",
              "subject": "SPm-8ac",
              "teacher": "Mel"
            },
            {
              "id": -1,
              "name": "SPw-8ab",
              "subject": "SPw-8ab",
              "teacher": "BoM"
            },
            {
              "id": -1,
              "name": "SPw-8ac",
              "subject": "SPw-8ac",
              "teacher": "Göb"
            }
          ],
          "courses": [
            { "subject": "achoJ2", "teacher": "Lie" },
            { "subject": "achoM2", "teacher": "Kus" },
            { "subject": "choJ", "teacher": "CHLJ" },
            { "subject": "choM", "teacher": "CHLM" },
            { "subject": "ens2", "teacher": "Sca" },
            { "subject": "ETH-8ab", "teacher": "Zin" },
            { "subject": "FR-8a-8b", "teacher": "Ste" },
            { "subject": "LA-st8", "teacher": "Kie" },
            { "subject": "RE/e-st8", "teacher": "Bru" },
            { "subject": "RE/k-st8", "teacher": "Lüb" },
            { "subject": "RU-st8", "teacher": "Men" },
            { "subject": "SPm-8ac", "teacher": "Mel" },
            { "subject": "SPw-8ab", "teacher": "BoM" },
            { "subject": "SPw-8ac", "teacher": "Göb" }
          ],
          "lessons": [
            {
              "id": 773,
              "name": "ACHM2 (achoM2)",
              "subject": "ACHM2",
              "group": "achoM2",
              "teacher": "Kus"
            },
            {
              "id": 772,
              "name": "ACHJ2 (achoJ2)",
              "subject": "ACHJ2",
              "group": "achoJ2",
              "teacher": "Lie"
            },
            {
              "id": 725,
              "name": "AG J",
              "subject": "AG J",
              "group": null,
              "teacher": "Göb"
            },
            {
              "id": 222,
              "name": "DE",
              "subject": "DE",
              "group": null,
              "teacher": "Len"
            },
            {
              "id": 223,
              "name": "EN",
              "subject": "EN",
              "group": null,
              "teacher": "Sei"
            },
            {
              "id": 224,
              "name": "FR (FR-8a-8b)",
              "subject": "FR",
              "group": "FR-8a-8b",
              "teacher": "Ste"
            },
            {
              "id": 225,
              "name": "RU (RU-st8)",
              "subject": "RU",
              "group": "RU-st8",
              "teacher": "Men"
            },
            {
              "id": 226,
              "name": "MA",
              "subject": "MA",
              "group": null,
              "teacher": "Ber"
            },
            {
              "id": 227,
              "name": "BIO",
              "subject": "BIO",
              "group": null,
              "teacher": "HoK"
            },
            {
              "id": 228,
              "name": "CH",
              "subject": "CH",
              "group": null,
              "teacher": "Bro"
            },
            {
              "id": 229,
              "name": "PH",
              "subject": "PH",
              "group": null,
              "teacher": "Thi"
            },
            {
              "id": 230,
              "name": "GE",
              "subject": "GE",
              "group": null,
              "teacher": "Pol"
            },
            {
              "id": 231,
              "name": "GRW",
              "subject": "GRW",
              "group": null,
              "teacher": "Len"
            },
            {
              "id": 232,
              "name": "GEO",
              "subject": "GEO",
              "group": null,
              "teacher": "Kön"
            },
            {
              "id": 233,
              "name": "SPOw (SPw-8ab)",
              "subject": "SPOw",
              "group": "SPw-8ab",
              "teacher": "BoM"
            },
            {
              "id": 234,
              "name": "REe (RE/e-st8)",
              "subject": "REe",
              "group": "RE/e-st8",
              "teacher": "Bru"
            },
            {
              "id": 235,
              "name": "REk (RE/k-st8)",
              "subject": "REk",
              "group": "RE/k-st8",
              "teacher": "Lüb"
            },
            {
              "id": 236,
              "name": "ETH (ETH-8ab)",
              "subject": "ETH",
              "group": "ETH-8ab",
              "teacher": "Zin"
            },
            {
              "id": 237,
              "name": "KU",
              "subject": "KU",
              "group": null,
              "teacher": "Süm"
            },
            {
              "id": 238,
              "name": "MU",
              "subject": "MU",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 239,
              "name": "INF",
              "subject": "INF",
              "group": null,
              "teacher": "Shu"
            },
            {
              "id": 249,
              "name": "SPOm (SPm-8ac)",
              "subject": "SPOm",
              "group": "SPm-8ac",
              "teacher": "Mel"
            },
            {
              "id": 242,
              "name": "STIB",
              "subject": "STIB",
              "group": null,
              "teacher": "Scö"
            },
            {
              "id": 248,
              "name": "SPOw (SPw-8ac)",
              "subject": "SPOw",
              "group": "SPw-8ac",
              "teacher": "Göb"
            },
            {
              "id": 441,
              "name": "I-RU",
              "subject": "I-RU",
              "group": null,
              "teacher": "Ste"
            },
            {
              "id": 451,
              "name": "STIB",
              "subject": "STIB",
              "group": null,
              "teacher": "Scö"
            },
            {
              "id": 449,
              "name": "MUHG",
              "subject": "MUHG",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 450,
              "name": "MUHG",
              "subject": "MUHG",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 456,
              "name": "LAT (LA-st8)",
              "subject": "LAT",
              "group": "LA-st8",
              "teacher": "Kie"
            },
            {
              "id": 600,
              "name": "LRS",
              "subject": "LRS",
              "group": null,
              "teacher": "Bru"
            },
            {
              "id": 615,
              "name": "CHJ (choJ)",
              "subject": "CHJ",
              "group": "choJ",
              "teacher": "CHLJ"
            },
            {
              "id": 616,
              "name": "CHM (choM)",
              "subject": "CHM",
              "group": "choM",
              "teacher": "CHLM"
            },
            {
              "id": 617,
              "name": "ENS2 (ens2)",
              "subject": "ENS2",
              "group": "ens2",
              "teacher": "Sca"
            },
            {
              "id": 785,
              "name": "ACHM2 (achoM2)",
              "subject": "ACHM2",
              "group": "achoM2",
              "teacher": "Kus"
            },
            {
              "id": 784,
              "name": "ACHJ2 (achoJ2)",
              "subject": "ACHJ2",
              "group": "achoJ2",
              "teacher": "Lie"
            },
            {
              "id": 595,
              "name": "Jazz",
              "subject": "Jazz",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 717,
              "name": "Band",
              "subject": "Band",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 799,
              "name": "MA",
              "subject": "MA",
              "group": null,
              "teacher": "Ber"
            },
            {
              "id": 885,
              "name": "REk",
              "subject": "REk",
              "group": null,
              "teacher": null
            }
          ],
          "plannedLessons": [
            {
              "id": 248,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "SPw-8ac" },
              "teacher": { "changed": false, "value": "Göb Scn" },
              "room": { "changed": false, "value": "TH 1" },
              "schoolClass": "8a",
              "info": null
            },
            {
              "id": 249,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "SPm-8ac" },
              "teacher": { "changed": false, "value": "Mel" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "8a",
              "info": null
            },
            {
              "id": 248,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "SPw-8ac" },
              "teacher": { "changed": false, "value": "Göb Scn" },
              "room": { "changed": false, "value": "TH 1" },
              "schoolClass": "8a",
              "info": null
            },
            {
              "id": 249,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "SPm-8ac" },
              "teacher": { "changed": false, "value": "Mel" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "8a",
              "info": null
            },
            {
              "id": 222,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "Len" },
              "room": { "changed": false, "value": "E2.14" },
              "schoolClass": "8a",
              "info": null
            },
            {
              "id": 232,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "GEO" },
              "teacher": { "changed": false, "value": "Kön" },
              "room": { "changed": false, "value": "E0.12" },
              "schoolClass": "8a",
              "info": null
            },
            {
              "id": 228,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "CH" },
              "teacher": { "changed": false, "value": "Bro" },
              "room": { "changed": false, "value": "E2.19" },
              "schoolClass": "8a",
              "info": null
            },
            {
              "id": 233,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "SPw-8ab" },
              "teacher": { "changed": false, "value": "BoM" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "8a",
              "info": null
            },
            {
              "id": 615,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "choJ" },
              "teacher": { "changed": false, "value": "CHLJ Scö" },
              "room": { "changed": false, "value": null },
              "schoolClass": "8a",
              "info": null
            },
            {
              "id": 616,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "choM" },
              "teacher": { "changed": false, "value": "CHLM Paw" },
              "room": { "changed": false, "value": "S2.17" },
              "schoolClass": "8a",
              "info": null
            },
            {
              "id": 617,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "ens2" },
              "teacher": { "changed": false, "value": "Sca" },
              "room": { "changed": false, "value": "A0.09" },
              "schoolClass": "8a",
              "info": null
            },
            {
              "id": 615,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "choJ" },
              "teacher": { "changed": false, "value": "CHLJ Scö" },
              "room": { "changed": false, "value": null },
              "schoolClass": "8a",
              "info": null
            },
            {
              "id": 616,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "choM" },
              "teacher": { "changed": false, "value": "CHLM Paw" },
              "room": { "changed": false, "value": "S2.17" },
              "schoolClass": "8a",
              "info": null
            },
            {
              "id": 617,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "ens2" },
              "teacher": { "changed": false, "value": "Sca" },
              "room": { "changed": false, "value": "A0.09" },
              "schoolClass": "8a",
              "info": null
            }
          ]
        },
        {
          "name": "8b",
          "type": "schoolClass",
          "timetable": [
            {
              "id": 289,
              "name": "ETH (ETH-8bc)",
              "subject": "ETH",
              "group": "ETH-8bc",
              "teacher": null
            },
            {
              "id": 224,
              "name": "FR (FR-8a-8b)",
              "subject": "FR",
              "group": "FR-8a-8b",
              "teacher": "Ste"
            },
            {
              "id": 225,
              "name": "RU (RU-st8)",
              "subject": "RU",
              "group": "RU-st8",
              "teacher": "Men"
            },
            {
              "id": 233,
              "name": "SPOw (SPw-8ab)",
              "subject": "SPOw",
              "group": "SPw-8ab",
              "teacher": "BoM"
            },
            {
              "id": 234,
              "name": "REe (RE/e-st8)",
              "subject": "REe",
              "group": "RE/e-st8",
              "teacher": "Bru"
            },
            {
              "id": 235,
              "name": "REk (RE/k-st8)",
              "subject": "REk",
              "group": "RE/k-st8",
              "teacher": "Lüb"
            },
            {
              "id": 236,
              "name": "ETH (ETH-8ab)",
              "subject": "ETH",
              "group": "ETH-8ab",
              "teacher": "Zin"
            },
            {
              "id": 250,
              "name": "DE",
              "subject": "DE",
              "group": null,
              "teacher": "Lin"
            },
            {
              "id": 251,
              "name": "EN",
              "subject": "EN",
              "group": null,
              "teacher": "Sei"
            },
            {
              "id": 268,
              "name": "INF (INF-8b-1)",
              "subject": "INF",
              "group": "INF-8b-1",
              "teacher": "Shu"
            },
            {
              "id": 266,
              "name": "MU",
              "subject": "MU",
              "group": null,
              "teacher": "Bän"
            },
            {
              "id": 254,
              "name": "MA",
              "subject": "MA",
              "group": null,
              "teacher": "Dom"
            },
            {
              "id": 255,
              "name": "BIO",
              "subject": "BIO",
              "group": null,
              "teacher": "HoK"
            },
            {
              "id": 256,
              "name": "CH",
              "subject": "CH",
              "group": null,
              "teacher": "Bro"
            },
            {
              "id": 257,
              "name": "PH",
              "subject": "PH",
              "group": null,
              "teacher": "Thi"
            },
            {
              "id": 258,
              "name": "GE",
              "subject": "GE",
              "group": null,
              "teacher": "Pau"
            },
            {
              "id": 259,
              "name": "GRW",
              "subject": "GRW",
              "group": null,
              "teacher": "Len"
            },
            {
              "id": 260,
              "name": "GEO",
              "subject": "GEO",
              "group": null,
              "teacher": "Mel"
            },
            {
              "id": 265,
              "name": "KU",
              "subject": "KU",
              "group": null,
              "teacher": "Süm"
            },
            {
              "id": 267,
              "name": "INF (INF-8b-2)",
              "subject": "INF",
              "group": "INF-8b-2",
              "teacher": "Gie"
            },
            {
              "id": 269,
              "name": "SPOm (SPm-8b)",
              "subject": "SPOm",
              "group": "SPm-8b",
              "teacher": "Mel"
            },
            {
              "id": 272,
              "name": "FR (FR-8b-8c)",
              "subject": "FR",
              "group": "FR-8b-8c",
              "teacher": "Kra"
            },
            {
              "id": 456,
              "name": "LAT (LA-st8)",
              "subject": "LAT",
              "group": "LA-st8",
              "teacher": "Kie"
            },
            {
              "id": 597,
              "name": "P:nw (P-st8-nw)",
              "subject": "P:nw",
              "group": "P-st8-nw",
              "teacher": "Bro"
            },
            {
              "id": 598,
              "name": "P:gw (P-st8-gw)",
              "subject": "P:gw",
              "group": "P-st8-gw",
              "teacher": "Mar"
            },
            {
              "id": 600,
              "name": "LRS",
              "subject": "LRS",
              "group": null,
              "teacher": "Bru"
            },
            {
              "id": 595,
              "name": "Jazz",
              "subject": "Jazz",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 717,
              "name": "Band",
              "subject": "Band",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 722,
              "name": "AG V",
              "subject": "AG V",
              "group": null,
              "teacher": "Göb"
            },
            {
              "id": -1,
              "name": "ETH-8ab",
              "subject": "ETH-8ab",
              "teacher": "Zin"
            },
            {
              "id": -1,
              "name": "ETH-8bc",
              "subject": "ETH-8bc",
              "teacher": null
            },
            {
              "id": -1,
              "name": "FR-8a-8b",
              "subject": "FR-8a-8b",
              "teacher": "Ste"
            },
            {
              "id": -1,
              "name": "FR-8b-8c",
              "subject": "FR-8b-8c",
              "teacher": "Kra"
            },
            {
              "id": -1,
              "name": "INF-8b-1",
              "subject": "INF-8b-1",
              "teacher": "Shu"
            },
            {
              "id": -1,
              "name": "INF-8b-2",
              "subject": "INF-8b-2",
              "teacher": "Gie"
            },
            {
              "id": -1,
              "name": "LA-st8",
              "subject": "LA-st8",
              "teacher": "Kie"
            },
            {
              "id": -1,
              "name": "P-st8-gw",
              "subject": "P-st8-gw",
              "teacher": "Mar"
            },
            {
              "id": -1,
              "name": "P-st8-nw",
              "subject": "P-st8-nw",
              "teacher": "Bro"
            },
            {
              "id": -1,
              "name": "RE/e-st8",
              "subject": "RE/e-st8",
              "teacher": "Bru"
            },
            {
              "id": -1,
              "name": "RE/k-st8",
              "subject": "RE/k-st8",
              "teacher": "Lüb"
            },
            {
              "id": -1,
              "name": "RU-st8",
              "subject": "RU-st8",
              "teacher": "Men"
            },
            {
              "id": -1,
              "name": "SPm-8b",
              "subject": "SPm-8b",
              "teacher": "Mel"
            },
            {
              "id": -1,
              "name": "SPw-8ab",
              "subject": "SPw-8ab",
              "teacher": "BoM"
            }
          ],
          "courses": [
            { "subject": "ETH-8ab", "teacher": "Zin" },
            { "subject": "ETH-8bc", "teacher": null },
            { "subject": "FR-8a-8b", "teacher": "Ste" },
            { "subject": "FR-8b-8c", "teacher": "Kra" },
            { "subject": "INF-8b-1", "teacher": "Shu" },
            { "subject": "INF-8b-2", "teacher": "Gie" },
            { "subject": "LA-st8", "teacher": "Kie" },
            { "subject": "P-st8-gw", "teacher": "Mar" },
            { "subject": "P-st8-nw", "teacher": "Bro" },
            { "subject": "RE/e-st8", "teacher": "Bru" },
            { "subject": "RE/k-st8", "teacher": "Lüb" },
            { "subject": "RU-st8", "teacher": "Men" },
            { "subject": "SPm-8b", "teacher": "Mel" },
            { "subject": "SPw-8ab", "teacher": "BoM" }
          ],
          "lessons": [
            {
              "id": 289,
              "name": "ETH (ETH-8bc)",
              "subject": "ETH",
              "group": "ETH-8bc",
              "teacher": null
            },
            {
              "id": 224,
              "name": "FR (FR-8a-8b)",
              "subject": "FR",
              "group": "FR-8a-8b",
              "teacher": "Ste"
            },
            {
              "id": 225,
              "name": "RU (RU-st8)",
              "subject": "RU",
              "group": "RU-st8",
              "teacher": "Men"
            },
            {
              "id": 233,
              "name": "SPOw (SPw-8ab)",
              "subject": "SPOw",
              "group": "SPw-8ab",
              "teacher": "BoM"
            },
            {
              "id": 234,
              "name": "REe (RE/e-st8)",
              "subject": "REe",
              "group": "RE/e-st8",
              "teacher": "Bru"
            },
            {
              "id": 235,
              "name": "REk (RE/k-st8)",
              "subject": "REk",
              "group": "RE/k-st8",
              "teacher": "Lüb"
            },
            {
              "id": 236,
              "name": "ETH (ETH-8ab)",
              "subject": "ETH",
              "group": "ETH-8ab",
              "teacher": "Zin"
            },
            {
              "id": 250,
              "name": "DE",
              "subject": "DE",
              "group": null,
              "teacher": "Lin"
            },
            {
              "id": 251,
              "name": "EN",
              "subject": "EN",
              "group": null,
              "teacher": "Sei"
            },
            {
              "id": 268,
              "name": "INF (INF-8b-1)",
              "subject": "INF",
              "group": "INF-8b-1",
              "teacher": "Shu"
            },
            {
              "id": 266,
              "name": "MU",
              "subject": "MU",
              "group": null,
              "teacher": "Bän"
            },
            {
              "id": 254,
              "name": "MA",
              "subject": "MA",
              "group": null,
              "teacher": "Dom"
            },
            {
              "id": 255,
              "name": "BIO",
              "subject": "BIO",
              "group": null,
              "teacher": "HoK"
            },
            {
              "id": 256,
              "name": "CH",
              "subject": "CH",
              "group": null,
              "teacher": "Bro"
            },
            {
              "id": 257,
              "name": "PH",
              "subject": "PH",
              "group": null,
              "teacher": "Thi"
            },
            {
              "id": 258,
              "name": "GE",
              "subject": "GE",
              "group": null,
              "teacher": "Pau"
            },
            {
              "id": 259,
              "name": "GRW",
              "subject": "GRW",
              "group": null,
              "teacher": "Len"
            },
            {
              "id": 260,
              "name": "GEO",
              "subject": "GEO",
              "group": null,
              "teacher": "Mel"
            },
            {
              "id": 265,
              "name": "KU",
              "subject": "KU",
              "group": null,
              "teacher": "Süm"
            },
            {
              "id": 267,
              "name": "INF (INF-8b-2)",
              "subject": "INF",
              "group": "INF-8b-2",
              "teacher": "Gie"
            },
            {
              "id": 269,
              "name": "SPOm (SPm-8b)",
              "subject": "SPOm",
              "group": "SPm-8b",
              "teacher": "Mel"
            },
            {
              "id": 272,
              "name": "FR (FR-8b-8c)",
              "subject": "FR",
              "group": "FR-8b-8c",
              "teacher": "Kra"
            },
            {
              "id": 456,
              "name": "LAT (LA-st8)",
              "subject": "LAT",
              "group": "LA-st8",
              "teacher": "Kie"
            },
            {
              "id": 597,
              "name": "P:nw (P-st8-nw)",
              "subject": "P:nw",
              "group": "P-st8-nw",
              "teacher": "Bro"
            },
            {
              "id": 598,
              "name": "P:gw (P-st8-gw)",
              "subject": "P:gw",
              "group": "P-st8-gw",
              "teacher": "Mar"
            },
            {
              "id": 600,
              "name": "LRS",
              "subject": "LRS",
              "group": null,
              "teacher": "Bru"
            },
            {
              "id": 595,
              "name": "Jazz",
              "subject": "Jazz",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 717,
              "name": "Band",
              "subject": "Band",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 722,
              "name": "AG V",
              "subject": "AG V",
              "group": null,
              "teacher": "Göb"
            }
          ],
          "plannedLessons": [
            {
              "id": 258,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "GE" },
              "teacher": { "changed": false, "value": "Pau" },
              "room": { "changed": false, "value": "E2.12" },
              "schoolClass": "8b",
              "info": null
            },
            {
              "id": 256,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "CH" },
              "teacher": { "changed": false, "value": "Bro" },
              "room": { "changed": false, "value": "E2.19" },
              "schoolClass": "8b",
              "info": null
            },
            {
              "id": 267,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "INF-8b-2" },
              "teacher": { "changed": false, "value": "Gie" },
              "room": { "changed": false, "value": "S2.13" },
              "schoolClass": "8b",
              "info": null
            },
            {
              "id": 268,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": true, "value": "---" },
              "teacher": { "changed": true, "value": null },
              "room": { "changed": true, "value": null },
              "schoolClass": "8b",
              "info": "INF-8b-1 Frau Schuppan fällt aus, bitte in die Mensa gehen."
            },
            {
              "id": 250,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "Lin" },
              "room": { "changed": false, "value": "E2.14" },
              "schoolClass": "8b",
              "info": null
            },
            {
              "id": 254,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Dom Zsc" },
              "room": { "changed": false, "value": "E2.08" },
              "schoolClass": "8b",
              "info": null
            },
            {
              "id": 233,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "SPw-8ab" },
              "teacher": { "changed": false, "value": "BoM" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "8b",
              "info": null
            },
            {
              "id": 269,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "SPm-8b" },
              "teacher": { "changed": false, "value": "Mel" },
              "room": { "changed": false, "value": "TH 1" },
              "schoolClass": "8b",
              "info": null
            }
          ]
        },
        {
          "name": "8c",
          "type": "schoolClass",
          "timetable": [
            {
              "id": 289,
              "name": "ETH (ETH-8bc)",
              "subject": "ETH",
              "group": "ETH-8bc",
              "teacher": null
            },
            {
              "id": 225,
              "name": "RU (RU-st8)",
              "subject": "RU",
              "group": "RU-st8",
              "teacher": "Men"
            },
            {
              "id": 234,
              "name": "REe (RE/e-st8)",
              "subject": "REe",
              "group": "RE/e-st8",
              "teacher": "Bru"
            },
            {
              "id": 235,
              "name": "REk (RE/k-st8)",
              "subject": "REk",
              "group": "RE/k-st8",
              "teacher": "Lüb"
            },
            {
              "id": 249,
              "name": "SPOm (SPm-8ac)",
              "subject": "SPOm",
              "group": "SPm-8ac",
              "teacher": "Mel"
            },
            {
              "id": 248,
              "name": "SPOw (SPw-8ac)",
              "subject": "SPOw",
              "group": "SPw-8ac",
              "teacher": "Göb"
            },
            {
              "id": 270,
              "name": "DE",
              "subject": "DE",
              "group": null,
              "teacher": "Lin"
            },
            {
              "id": 271,
              "name": "EN",
              "subject": "EN",
              "group": null,
              "teacher": "Din"
            },
            {
              "id": 272,
              "name": "FR (FR-8b-8c)",
              "subject": "FR",
              "group": "FR-8b-8c",
              "teacher": "Kra"
            },
            {
              "id": 288,
              "name": "INF (INF-8c-1)",
              "subject": "INF",
              "group": "INF-8c-1",
              "teacher": "Shu"
            },
            {
              "id": 274,
              "name": "MA",
              "subject": "MA",
              "group": null,
              "teacher": "Thi"
            },
            {
              "id": 275,
              "name": "BIO",
              "subject": "BIO",
              "group": null,
              "teacher": "HoK"
            },
            {
              "id": 276,
              "name": "CH",
              "subject": "CH",
              "group": null,
              "teacher": "Bro"
            },
            {
              "id": 277,
              "name": "PH",
              "subject": "PH",
              "group": null,
              "teacher": "Thi"
            },
            {
              "id": 278,
              "name": "GE",
              "subject": "GE",
              "group": null,
              "teacher": "Pau"
            },
            {
              "id": 279,
              "name": "GRW",
              "subject": "GRW",
              "group": null,
              "teacher": "Len"
            },
            {
              "id": 280,
              "name": "GEO",
              "subject": "GEO",
              "group": null,
              "teacher": "Mel"
            },
            {
              "id": 287,
              "name": "INF (INF-8c-2)",
              "subject": "INF",
              "group": "INF-8c-2",
              "teacher": "Gie"
            },
            {
              "id": 286,
              "name": "MU",
              "subject": "MU",
              "group": null,
              "teacher": "Bän"
            },
            {
              "id": 285,
              "name": "KU",
              "subject": "KU",
              "group": null,
              "teacher": "Süm"
            },
            {
              "id": 443,
              "name": "Int",
              "subject": "Int",
              "group": null,
              "teacher": "Ste"
            },
            {
              "id": 456,
              "name": "LAT (LA-st8)",
              "subject": "LAT",
              "group": "LA-st8",
              "teacher": "Kie"
            },
            {
              "id": 597,
              "name": "P:nw (P-st8-nw)",
              "subject": "P:nw",
              "group": "P-st8-nw",
              "teacher": "Bro"
            },
            {
              "id": 598,
              "name": "P:gw (P-st8-gw)",
              "subject": "P:gw",
              "group": "P-st8-gw",
              "teacher": "Mar"
            },
            {
              "id": 595,
              "name": "Jazz",
              "subject": "Jazz",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 717,
              "name": "Band",
              "subject": "Band",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": -1,
              "name": "ETH-8bc",
              "subject": "ETH-8bc",
              "teacher": null
            },
            {
              "id": -1,
              "name": "FR-8b-8c",
              "subject": "FR-8b-8c",
              "teacher": "Kra"
            },
            {
              "id": -1,
              "name": "INF-8c-1",
              "subject": "INF-8c-1",
              "teacher": "Shu"
            },
            {
              "id": -1,
              "name": "INF-8c-2",
              "subject": "INF-8c-2",
              "teacher": "Gie"
            },
            {
              "id": -1,
              "name": "LA-st8",
              "subject": "LA-st8",
              "teacher": "Kie"
            },
            {
              "id": -1,
              "name": "P-st8-gw",
              "subject": "P-st8-gw",
              "teacher": "Mar"
            },
            {
              "id": -1,
              "name": "P-st8-nw",
              "subject": "P-st8-nw",
              "teacher": "Bro"
            },
            {
              "id": -1,
              "name": "RE/e-st8",
              "subject": "RE/e-st8",
              "teacher": "Bru"
            },
            {
              "id": -1,
              "name": "RE/k-st8",
              "subject": "RE/k-st8",
              "teacher": "Lüb"
            },
            {
              "id": -1,
              "name": "RU-st8",
              "subject": "RU-st8",
              "teacher": "Men"
            },
            {
              "id": -1,
              "name": "SPm-8ac",
              "subject": "SPm-8ac",
              "teacher": "Mel"
            },
            {
              "id": -1,
              "name": "SPw-8ac",
              "subject": "SPw-8ac",
              "teacher": "Göb"
            }
          ],
          "courses": [
            { "subject": "ETH-8bc", "teacher": null },
            { "subject": "FR-8b-8c", "teacher": "Kra" },
            { "subject": "INF-8c-1", "teacher": "Shu" },
            { "subject": "INF-8c-2", "teacher": "Gie" },
            { "subject": "LA-st8", "teacher": "Kie" },
            { "subject": "P-st8-gw", "teacher": "Mar" },
            { "subject": "P-st8-nw", "teacher": "Bro" },
            { "subject": "RE/e-st8", "teacher": "Bru" },
            { "subject": "RE/k-st8", "teacher": "Lüb" },
            { "subject": "RU-st8", "teacher": "Men" },
            { "subject": "SPm-8ac", "teacher": "Mel" },
            { "subject": "SPw-8ac", "teacher": "Göb" }
          ],
          "lessons": [
            {
              "id": 289,
              "name": "ETH (ETH-8bc)",
              "subject": "ETH",
              "group": "ETH-8bc",
              "teacher": null
            },
            {
              "id": 225,
              "name": "RU (RU-st8)",
              "subject": "RU",
              "group": "RU-st8",
              "teacher": "Men"
            },
            {
              "id": 234,
              "name": "REe (RE/e-st8)",
              "subject": "REe",
              "group": "RE/e-st8",
              "teacher": "Bru"
            },
            {
              "id": 235,
              "name": "REk (RE/k-st8)",
              "subject": "REk",
              "group": "RE/k-st8",
              "teacher": "Lüb"
            },
            {
              "id": 249,
              "name": "SPOm (SPm-8ac)",
              "subject": "SPOm",
              "group": "SPm-8ac",
              "teacher": "Mel"
            },
            {
              "id": 248,
              "name": "SPOw (SPw-8ac)",
              "subject": "SPOw",
              "group": "SPw-8ac",
              "teacher": "Göb"
            },
            {
              "id": 270,
              "name": "DE",
              "subject": "DE",
              "group": null,
              "teacher": "Lin"
            },
            {
              "id": 271,
              "name": "EN",
              "subject": "EN",
              "group": null,
              "teacher": "Din"
            },
            {
              "id": 272,
              "name": "FR (FR-8b-8c)",
              "subject": "FR",
              "group": "FR-8b-8c",
              "teacher": "Kra"
            },
            {
              "id": 288,
              "name": "INF (INF-8c-1)",
              "subject": "INF",
              "group": "INF-8c-1",
              "teacher": "Shu"
            },
            {
              "id": 274,
              "name": "MA",
              "subject": "MA",
              "group": null,
              "teacher": "Thi"
            },
            {
              "id": 275,
              "name": "BIO",
              "subject": "BIO",
              "group": null,
              "teacher": "HoK"
            },
            {
              "id": 276,
              "name": "CH",
              "subject": "CH",
              "group": null,
              "teacher": "Bro"
            },
            {
              "id": 277,
              "name": "PH",
              "subject": "PH",
              "group": null,
              "teacher": "Thi"
            },
            {
              "id": 278,
              "name": "GE",
              "subject": "GE",
              "group": null,
              "teacher": "Pau"
            },
            {
              "id": 279,
              "name": "GRW",
              "subject": "GRW",
              "group": null,
              "teacher": "Len"
            },
            {
              "id": 280,
              "name": "GEO",
              "subject": "GEO",
              "group": null,
              "teacher": "Mel"
            },
            {
              "id": 287,
              "name": "INF (INF-8c-2)",
              "subject": "INF",
              "group": "INF-8c-2",
              "teacher": "Gie"
            },
            {
              "id": 286,
              "name": "MU",
              "subject": "MU",
              "group": null,
              "teacher": "Bän"
            },
            {
              "id": 285,
              "name": "KU",
              "subject": "KU",
              "group": null,
              "teacher": "Süm"
            },
            {
              "id": 443,
              "name": "Int",
              "subject": "Int",
              "group": null,
              "teacher": "Ste"
            },
            {
              "id": 456,
              "name": "LAT (LA-st8)",
              "subject": "LAT",
              "group": "LA-st8",
              "teacher": "Kie"
            },
            {
              "id": 597,
              "name": "P:nw (P-st8-nw)",
              "subject": "P:nw",
              "group": "P-st8-nw",
              "teacher": "Bro"
            },
            {
              "id": 598,
              "name": "P:gw (P-st8-gw)",
              "subject": "P:gw",
              "group": "P-st8-gw",
              "teacher": "Mar"
            },
            {
              "id": 595,
              "name": "Jazz",
              "subject": "Jazz",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 717,
              "name": "Band",
              "subject": "Band",
              "group": null,
              "teacher": "Kus"
            }
          ],
          "plannedLessons": [
            {
              "id": 248,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "SPw-8ac" },
              "teacher": { "changed": false, "value": "Göb Scn" },
              "room": { "changed": false, "value": "TH 1" },
              "schoolClass": "8c",
              "info": null
            },
            {
              "id": 249,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "SPm-8ac" },
              "teacher": { "changed": false, "value": "Mel" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "8c",
              "info": null
            },
            {
              "id": 248,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "SPw-8ac" },
              "teacher": { "changed": false, "value": "Göb Scn" },
              "room": { "changed": false, "value": "TH 1" },
              "schoolClass": "8c",
              "info": null
            },
            {
              "id": 249,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "SPm-8ac" },
              "teacher": { "changed": false, "value": "Mel" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "8c",
              "info": null
            },
            {
              "id": 271,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "EN" },
              "teacher": { "changed": false, "value": "Din" },
              "room": { "changed": false, "value": "E2.15" },
              "schoolClass": "8c",
              "info": null
            },
            {
              "id": 274,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Thi" },
              "room": { "changed": false, "value": "E2.07" },
              "schoolClass": "8c",
              "info": null
            },
            {
              "id": 279,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "GRW" },
              "teacher": { "changed": false, "value": "Len" },
              "room": { "changed": false, "value": "E0.08" },
              "schoolClass": "8c",
              "info": null
            },
            {
              "id": 286,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "MU" },
              "teacher": { "changed": false, "value": "Bän" },
              "room": { "changed": false, "value": "E0.07" },
              "schoolClass": "8c",
              "info": null
            }
          ]
        },
        {
          "name": "9 St",
          "type": "schoolClass",
          "timetable": [
            {
              "id": 809,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Fuchs"
            },
            {
              "id": 810,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Fuchs"
            },
            {
              "id": 814,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Scö"
            },
            {
              "id": 815,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 818,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Scö"
            },
            {
              "id": 820,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 841,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Scö"
            },
            {
              "id": 842,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Scö"
            },
            {
              "id": 847,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Sca"
            },
            {
              "id": 860,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Paw"
            }
          ],
          "courses": [],
          "lessons": [
            {
              "id": 809,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Fuchs"
            },
            {
              "id": 810,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Fuchs"
            },
            {
              "id": 814,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Scö"
            },
            {
              "id": 815,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 818,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Scö"
            },
            {
              "id": 820,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 841,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Scö"
            },
            {
              "id": 842,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Scö"
            },
            {
              "id": 847,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Sca"
            },
            {
              "id": 860,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Paw"
            }
          ],
          "plannedLessons": []
        },
        {
          "name": "9 Kla",
          "type": "schoolClass",
          "timetable": [
            {
              "id": 846,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Sca"
            },
            {
              "id": 852,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Sca"
            },
            {
              "id": 853,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Bän"
            },
            {
              "id": 867,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Sca"
            },
            {
              "id": 868,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Sca"
            },
            {
              "id": 869,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Gra"
            },
            {
              "id": 875,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Gra"
            },
            {
              "id": 876,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Gra"
            },
            {
              "id": 877,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Paw"
            },
            {
              "id": 880,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Paw"
            }
          ],
          "courses": [],
          "lessons": [
            {
              "id": 846,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Sca"
            },
            {
              "id": 852,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Sca"
            },
            {
              "id": 853,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Bän"
            },
            {
              "id": 867,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Sca"
            },
            {
              "id": 868,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Sca"
            },
            {
              "id": 869,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Gra"
            },
            {
              "id": 875,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Gra"
            },
            {
              "id": 876,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Gra"
            },
            {
              "id": 877,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Paw"
            },
            {
              "id": 880,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Paw"
            }
          ],
          "plannedLessons": []
        },
        {
          "name": "9a",
          "type": "schoolClass",
          "timetable": [
            {
              "id": 773,
              "name": "ACHM2 (achoM2)",
              "subject": "ACHM2",
              "group": "achoM2",
              "teacher": "Kus"
            },
            {
              "id": 715,
              "name": "Jazz",
              "subject": "Jazz",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 772,
              "name": "ACHJ2 (achoJ2)",
              "subject": "ACHJ2",
              "group": "achoJ2",
              "teacher": "Lie"
            },
            {
              "id": 458,
              "name": "LAT (LA-st9)",
              "subject": "LAT",
              "group": "LA-st9",
              "teacher": "Kie"
            },
            {
              "id": 290,
              "name": "DE",
              "subject": "DE",
              "group": null,
              "teacher": "Men"
            },
            {
              "id": 291,
              "name": "EN",
              "subject": "EN",
              "group": null,
              "teacher": "Din"
            },
            {
              "id": 292,
              "name": "FR (FR-9a-9b)",
              "subject": "FR",
              "group": "FR-9a-9b",
              "teacher": "Lüb"
            },
            {
              "id": 293,
              "name": "RU (RU-st9)",
              "subject": "RU",
              "group": "RU-st9",
              "teacher": "Ste"
            },
            {
              "id": 294,
              "name": "MA",
              "subject": "MA",
              "group": null,
              "teacher": "Vet"
            },
            {
              "id": 295,
              "name": "BIO",
              "subject": "BIO",
              "group": null,
              "teacher": "Bro"
            },
            {
              "id": 296,
              "name": "CH",
              "subject": "CH",
              "group": null,
              "teacher": "Bro"
            },
            {
              "id": 297,
              "name": "PH",
              "subject": "PH",
              "group": null,
              "teacher": "Kok"
            },
            {
              "id": 298,
              "name": "GE",
              "subject": "GE",
              "group": null,
              "teacher": "Kie"
            },
            {
              "id": 299,
              "name": "GRW",
              "subject": "GRW",
              "group": null,
              "teacher": "Kie"
            },
            {
              "id": 300,
              "name": "GEO",
              "subject": "GEO",
              "group": null,
              "teacher": "Sch"
            },
            {
              "id": 302,
              "name": "REe (RE/e-st9)",
              "subject": "REe",
              "group": "RE/e-st9",
              "teacher": "Bru"
            },
            {
              "id": 303,
              "name": "REk (RE/k-st9)",
              "subject": "REk",
              "group": "RE/k-st9",
              "teacher": "Lüb"
            },
            {
              "id": 304,
              "name": "ETH (ETH-9ac)",
              "subject": "ETH",
              "group": "ETH-9ac",
              "teacher": "Zin"
            },
            {
              "id": 305,
              "name": "KU",
              "subject": "KU",
              "group": null,
              "teacher": "Süm"
            },
            {
              "id": 306,
              "name": "MU",
              "subject": "MU",
              "group": null,
              "teacher": "Sca"
            },
            {
              "id": 307,
              "name": "INF",
              "subject": "INF",
              "group": null,
              "teacher": "Gie"
            },
            {
              "id": 310,
              "name": "MUHG",
              "subject": "MUHG",
              "group": null,
              "teacher": "Sca"
            },
            {
              "id": 309,
              "name": "MUHG",
              "subject": "MUHG",
              "group": null,
              "teacher": "Sca"
            },
            {
              "id": 311,
              "name": "SPOm (SPm-st9)",
              "subject": "SPOm",
              "group": "SPm-st9",
              "teacher": "Mel"
            },
            {
              "id": 352,
              "name": "SPOw (SPw-9ac)",
              "subject": "SPOw",
              "group": "SPw-9ac",
              "teacher": "Göb"
            },
            {
              "id": 453,
              "name": "Nach",
              "subject": "Nach",
              "group": null,
              "teacher": "n.n."
            },
            {
              "id": 615,
              "name": "CHJ (choJ)",
              "subject": "CHJ",
              "group": "choJ",
              "teacher": "CHLJ"
            },
            {
              "id": 616,
              "name": "CHM (choM)",
              "subject": "CHM",
              "group": "choM",
              "teacher": "CHLM"
            },
            {
              "id": 617,
              "name": "ENS2 (ens2)",
              "subject": "ENS2",
              "group": "ens2",
              "teacher": "Sca"
            },
            {
              "id": 785,
              "name": "ACHM2 (achoM2)",
              "subject": "ACHM2",
              "group": "achoM2",
              "teacher": "Kus"
            },
            {
              "id": 784,
              "name": "ACHJ2 (achoJ2)",
              "subject": "ACHJ2",
              "group": "achoJ2",
              "teacher": "Lie"
            },
            {
              "id": 717,
              "name": "Band",
              "subject": "Band",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 886,
              "name": "SOR",
              "subject": "SOR",
              "group": null,
              "teacher": "Küh"
            },
            {
              "id": -1,
              "name": "achoJ2",
              "subject": "achoJ2",
              "teacher": "Lie"
            },
            {
              "id": -1,
              "name": "achoM2",
              "subject": "achoM2",
              "teacher": "Kus"
            },
            { "id": -1, "name": "choJ", "subject": "choJ", "teacher": "CHLJ" },
            { "id": -1, "name": "choM", "subject": "choM", "teacher": "CHLM" },
            { "id": -1, "name": "ens2", "subject": "ens2", "teacher": "Sca" },
            {
              "id": -1,
              "name": "ETH-9ac",
              "subject": "ETH-9ac",
              "teacher": "Zin"
            },
            {
              "id": -1,
              "name": "FR-9a-9b",
              "subject": "FR-9a-9b",
              "teacher": "Lüb"
            },
            {
              "id": -1,
              "name": "LA-st9",
              "subject": "LA-st9",
              "teacher": "Kie"
            },
            {
              "id": -1,
              "name": "RE/e-st9",
              "subject": "RE/e-st9",
              "teacher": "Bru"
            },
            {
              "id": -1,
              "name": "RE/k-st9",
              "subject": "RE/k-st9",
              "teacher": "Lüb"
            },
            {
              "id": -1,
              "name": "RU-st9",
              "subject": "RU-st9",
              "teacher": "Ste"
            },
            {
              "id": -1,
              "name": "SPm-st9",
              "subject": "SPm-st9",
              "teacher": "Mel"
            },
            {
              "id": -1,
              "name": "SPw-9ac",
              "subject": "SPw-9ac",
              "teacher": "Göb"
            }
          ],
          "courses": [
            { "subject": "achoJ2", "teacher": "Lie" },
            { "subject": "achoM2", "teacher": "Kus" },
            { "subject": "choJ", "teacher": "CHLJ" },
            { "subject": "choM", "teacher": "CHLM" },
            { "subject": "ens2", "teacher": "Sca" },
            { "subject": "ETH-9ac", "teacher": "Zin" },
            { "subject": "FR-9a-9b", "teacher": "Lüb" },
            { "subject": "LA-st9", "teacher": "Kie" },
            { "subject": "RE/e-st9", "teacher": "Bru" },
            { "subject": "RE/k-st9", "teacher": "Lüb" },
            { "subject": "RU-st9", "teacher": "Ste" },
            { "subject": "SPm-st9", "teacher": "Mel" },
            { "subject": "SPw-9ac", "teacher": "Göb" }
          ],
          "lessons": [
            {
              "id": 773,
              "name": "ACHM2 (achoM2)",
              "subject": "ACHM2",
              "group": "achoM2",
              "teacher": "Kus"
            },
            {
              "id": 715,
              "name": "Jazz",
              "subject": "Jazz",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 772,
              "name": "ACHJ2 (achoJ2)",
              "subject": "ACHJ2",
              "group": "achoJ2",
              "teacher": "Lie"
            },
            {
              "id": 458,
              "name": "LAT (LA-st9)",
              "subject": "LAT",
              "group": "LA-st9",
              "teacher": "Kie"
            },
            {
              "id": 290,
              "name": "DE",
              "subject": "DE",
              "group": null,
              "teacher": "Men"
            },
            {
              "id": 291,
              "name": "EN",
              "subject": "EN",
              "group": null,
              "teacher": "Din"
            },
            {
              "id": 292,
              "name": "FR (FR-9a-9b)",
              "subject": "FR",
              "group": "FR-9a-9b",
              "teacher": "Lüb"
            },
            {
              "id": 293,
              "name": "RU (RU-st9)",
              "subject": "RU",
              "group": "RU-st9",
              "teacher": "Ste"
            },
            {
              "id": 294,
              "name": "MA",
              "subject": "MA",
              "group": null,
              "teacher": "Vet"
            },
            {
              "id": 295,
              "name": "BIO",
              "subject": "BIO",
              "group": null,
              "teacher": "Bro"
            },
            {
              "id": 296,
              "name": "CH",
              "subject": "CH",
              "group": null,
              "teacher": "Bro"
            },
            {
              "id": 297,
              "name": "PH",
              "subject": "PH",
              "group": null,
              "teacher": "Kok"
            },
            {
              "id": 298,
              "name": "GE",
              "subject": "GE",
              "group": null,
              "teacher": "Kie"
            },
            {
              "id": 299,
              "name": "GRW",
              "subject": "GRW",
              "group": null,
              "teacher": "Kie"
            },
            {
              "id": 300,
              "name": "GEO",
              "subject": "GEO",
              "group": null,
              "teacher": "Sch"
            },
            {
              "id": 302,
              "name": "REe (RE/e-st9)",
              "subject": "REe",
              "group": "RE/e-st9",
              "teacher": "Bru"
            },
            {
              "id": 303,
              "name": "REk (RE/k-st9)",
              "subject": "REk",
              "group": "RE/k-st9",
              "teacher": "Lüb"
            },
            {
              "id": 304,
              "name": "ETH (ETH-9ac)",
              "subject": "ETH",
              "group": "ETH-9ac",
              "teacher": "Zin"
            },
            {
              "id": 305,
              "name": "KU",
              "subject": "KU",
              "group": null,
              "teacher": "Süm"
            },
            {
              "id": 306,
              "name": "MU",
              "subject": "MU",
              "group": null,
              "teacher": "Sca"
            },
            {
              "id": 307,
              "name": "INF",
              "subject": "INF",
              "group": null,
              "teacher": "Gie"
            },
            {
              "id": 310,
              "name": "MUHG",
              "subject": "MUHG",
              "group": null,
              "teacher": "Sca"
            },
            {
              "id": 309,
              "name": "MUHG",
              "subject": "MUHG",
              "group": null,
              "teacher": "Sca"
            },
            {
              "id": 311,
              "name": "SPOm (SPm-st9)",
              "subject": "SPOm",
              "group": "SPm-st9",
              "teacher": "Mel"
            },
            {
              "id": 352,
              "name": "SPOw (SPw-9ac)",
              "subject": "SPOw",
              "group": "SPw-9ac",
              "teacher": "Göb"
            },
            {
              "id": 453,
              "name": "Nach",
              "subject": "Nach",
              "group": null,
              "teacher": "n.n."
            },
            {
              "id": 615,
              "name": "CHJ (choJ)",
              "subject": "CHJ",
              "group": "choJ",
              "teacher": "CHLJ"
            },
            {
              "id": 616,
              "name": "CHM (choM)",
              "subject": "CHM",
              "group": "choM",
              "teacher": "CHLM"
            },
            {
              "id": 617,
              "name": "ENS2 (ens2)",
              "subject": "ENS2",
              "group": "ens2",
              "teacher": "Sca"
            },
            {
              "id": 785,
              "name": "ACHM2 (achoM2)",
              "subject": "ACHM2",
              "group": "achoM2",
              "teacher": "Kus"
            },
            {
              "id": 784,
              "name": "ACHJ2 (achoJ2)",
              "subject": "ACHJ2",
              "group": "achoJ2",
              "teacher": "Lie"
            },
            {
              "id": 717,
              "name": "Band",
              "subject": "Band",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 886,
              "name": "SOR",
              "subject": "SOR",
              "group": null,
              "teacher": "Küh"
            }
          ],
          "plannedLessons": [
            {
              "id": 305,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "KU" },
              "teacher": { "changed": false, "value": "Süm" },
              "room": { "changed": false, "value": "M1.08" },
              "schoolClass": "9a",
              "info": null
            },
            {
              "id": 293,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "RU-st9" },
              "teacher": { "changed": false, "value": "Ste" },
              "room": { "changed": false, "value": "E1.13" },
              "schoolClass": "9a",
              "info": null
            },
            {
              "id": 292,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": true, "value": "---" },
              "teacher": { "changed": true, "value": null },
              "room": { "changed": true, "value": null },
              "schoolClass": "9a",
              "info": "FR-9a-9b Frau Lübke fällt aus, bitte in die Mensa gehen."
            },
            {
              "id": 294,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Vet" },
              "room": { "changed": false, "value": "E1.09" },
              "schoolClass": "9a",
              "info": null
            },
            {
              "id": 295,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "BIO" },
              "teacher": { "changed": false, "value": "Bro" },
              "room": { "changed": false, "value": "E0.19" },
              "schoolClass": "9a",
              "info": null
            },
            {
              "id": 291,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "EN" },
              "teacher": { "changed": false, "value": "Din" },
              "room": { "changed": false, "value": "E2.12" },
              "schoolClass": "9a",
              "info": null
            },
            {
              "id": 302,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "RE/e-st9" },
              "teacher": { "changed": false, "value": "Bru" },
              "room": { "changed": false, "value": "E1.13" },
              "schoolClass": "9a",
              "info": null
            },
            {
              "id": 304,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "ETH-9ac" },
              "teacher": { "changed": false, "value": "Zin" },
              "room": { "changed": false, "value": "E0.09" },
              "schoolClass": "9a",
              "info": null
            },
            {
              "id": 303,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": true, "value": "---" },
              "teacher": { "changed": true, "value": null },
              "room": { "changed": true, "value": null },
              "schoolClass": "9a",
              "info": "RE/ k-st9 Frau Lübke fällt aus, bitte in die Mensa gehen."
            },
            {
              "id": 615,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "choJ" },
              "teacher": { "changed": false, "value": "CHLJ Scö" },
              "room": { "changed": false, "value": null },
              "schoolClass": "9a",
              "info": null
            },
            {
              "id": 616,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "choM" },
              "teacher": { "changed": false, "value": "CHLM Paw" },
              "room": { "changed": false, "value": "S2.17" },
              "schoolClass": "9a",
              "info": null
            },
            {
              "id": 617,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "ens2" },
              "teacher": { "changed": false, "value": "Sca" },
              "room": { "changed": false, "value": "A0.09" },
              "schoolClass": "9a",
              "info": null
            },
            {
              "id": 886,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "SOR" },
              "teacher": { "changed": false, "value": "Küh" },
              "room": { "changed": false, "value": null },
              "schoolClass": "9a",
              "info": null
            },
            {
              "id": 615,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "choJ" },
              "teacher": { "changed": false, "value": "CHLJ Scö" },
              "room": { "changed": false, "value": null },
              "schoolClass": "9a",
              "info": null
            },
            {
              "id": 616,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "choM" },
              "teacher": { "changed": false, "value": "CHLM Paw" },
              "room": { "changed": false, "value": "S2.17" },
              "schoolClass": "9a",
              "info": null
            },
            {
              "id": 617,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "ens2" },
              "teacher": { "changed": false, "value": "Sca" },
              "room": { "changed": false, "value": "A0.09" },
              "schoolClass": "9a",
              "info": null
            }
          ]
        },
        {
          "name": "9b",
          "type": "schoolClass",
          "timetable": [
            {
              "id": 796,
              "name": "P:nw (NAWI-st9)",
              "subject": "P:nw",
              "group": "NAWI-st9",
              "teacher": "Met"
            },
            {
              "id": 795,
              "name": "P:gw (GEWI-st9)",
              "subject": "P:gw",
              "group": "GEWI-st9",
              "teacher": "Mar"
            },
            {
              "id": 715,
              "name": "Jazz",
              "subject": "Jazz",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 458,
              "name": "LAT (LA-st9)",
              "subject": "LAT",
              "group": "LA-st9",
              "teacher": "Kie"
            },
            {
              "id": 292,
              "name": "FR (FR-9a-9b)",
              "subject": "FR",
              "group": "FR-9a-9b",
              "teacher": "Lüb"
            },
            {
              "id": 293,
              "name": "RU (RU-st9)",
              "subject": "RU",
              "group": "RU-st9",
              "teacher": "Ste"
            },
            {
              "id": 302,
              "name": "REe (RE/e-st9)",
              "subject": "REe",
              "group": "RE/e-st9",
              "teacher": "Bru"
            },
            {
              "id": 303,
              "name": "REk (RE/k-st9)",
              "subject": "REk",
              "group": "RE/k-st9",
              "teacher": "Lüb"
            },
            {
              "id": 311,
              "name": "SPOm (SPm-st9)",
              "subject": "SPOm",
              "group": "SPm-st9",
              "teacher": "Mel"
            },
            {
              "id": 312,
              "name": "DE",
              "subject": "DE",
              "group": null,
              "teacher": "Leh"
            },
            {
              "id": 313,
              "name": "EN",
              "subject": "EN",
              "group": null,
              "teacher": "Din"
            },
            {
              "id": 326,
              "name": "ETH (ETH-9bc)",
              "subject": "ETH",
              "group": "ETH-9bc",
              "teacher": null
            },
            {
              "id": 327,
              "name": "KU",
              "subject": "KU",
              "group": null,
              "teacher": "Süm"
            },
            {
              "id": 316,
              "name": "MA",
              "subject": "MA",
              "group": null,
              "teacher": "Scg"
            },
            {
              "id": 317,
              "name": "BIO",
              "subject": "BIO",
              "group": null,
              "teacher": "Met"
            },
            {
              "id": 318,
              "name": "CH",
              "subject": "CH",
              "group": null,
              "teacher": "Met"
            },
            {
              "id": 319,
              "name": "PH",
              "subject": "PH",
              "group": null,
              "teacher": "Gla"
            },
            {
              "id": 320,
              "name": "GE",
              "subject": "GE",
              "group": null,
              "teacher": "Kie"
            },
            {
              "id": 321,
              "name": "GRW",
              "subject": "GRW",
              "group": null,
              "teacher": "Ber"
            },
            {
              "id": 322,
              "name": "GEO",
              "subject": "GEO",
              "group": null,
              "teacher": "Sch"
            },
            {
              "id": 330,
              "name": "INF",
              "subject": "INF",
              "group": null,
              "teacher": "Shu"
            },
            {
              "id": 328,
              "name": "MU",
              "subject": "MU",
              "group": null,
              "teacher": "Höl"
            },
            {
              "id": 331,
              "name": "P:gw (GEWI-st9)",
              "subject": "P:gw",
              "group": "GEWI-st9",
              "teacher": "Mar"
            },
            {
              "id": 332,
              "name": "P:nw (NAWI-st9)",
              "subject": "P:nw",
              "group": "NAWI-st9",
              "teacher": "Gün"
            },
            {
              "id": 353,
              "name": "SPOw (SPw-9b)",
              "subject": "SPOw",
              "group": "SPw-9b",
              "teacher": "Göb"
            },
            {
              "id": 453,
              "name": "Nach",
              "subject": "Nach",
              "group": null,
              "teacher": "n.n."
            },
            {
              "id": -1,
              "name": "ETH-9bc",
              "subject": "ETH-9bc",
              "teacher": null
            },
            {
              "id": -1,
              "name": "FR-9a-9b",
              "subject": "FR-9a-9b",
              "teacher": "Lüb"
            },
            {
              "id": -1,
              "name": "GEWI-st9",
              "subject": "GEWI-st9",
              "teacher": "Mar"
            },
            {
              "id": -1,
              "name": "LA-st9",
              "subject": "LA-st9",
              "teacher": "Kie"
            },
            {
              "id": -1,
              "name": "NAWI-st9",
              "subject": "NAWI-st9",
              "teacher": "Gün"
            },
            {
              "id": -1,
              "name": "NAWI-st9",
              "subject": "NAWI-st9",
              "teacher": "Met"
            },
            {
              "id": -1,
              "name": "RE/e-st9",
              "subject": "RE/e-st9",
              "teacher": "Bru"
            },
            {
              "id": -1,
              "name": "RE/k-st9",
              "subject": "RE/k-st9",
              "teacher": "Lüb"
            },
            {
              "id": -1,
              "name": "RU-st9",
              "subject": "RU-st9",
              "teacher": "Ste"
            },
            {
              "id": -1,
              "name": "SPm-st9",
              "subject": "SPm-st9",
              "teacher": "Mel"
            },
            {
              "id": -1,
              "name": "SPw-9b",
              "subject": "SPw-9b",
              "teacher": "Göb"
            }
          ],
          "courses": [
            { "subject": "ETH-9bc", "teacher": null },
            { "subject": "FR-9a-9b", "teacher": "Lüb" },
            { "subject": "GEWI-st9", "teacher": "Mar" },
            { "subject": "LA-st9", "teacher": "Kie" },
            { "subject": "NAWI-st9", "teacher": "Gün" },
            { "subject": "NAWI-st9", "teacher": "Met" },
            { "subject": "RE/e-st9", "teacher": "Bru" },
            { "subject": "RE/k-st9", "teacher": "Lüb" },
            { "subject": "RU-st9", "teacher": "Ste" },
            { "subject": "SPm-st9", "teacher": "Mel" },
            { "subject": "SPw-9b", "teacher": "Göb" }
          ],
          "lessons": [
            {
              "id": 796,
              "name": "P:nw (NAWI-st9)",
              "subject": "P:nw",
              "group": "NAWI-st9",
              "teacher": "Met"
            },
            {
              "id": 795,
              "name": "P:gw (GEWI-st9)",
              "subject": "P:gw",
              "group": "GEWI-st9",
              "teacher": "Mar"
            },
            {
              "id": 715,
              "name": "Jazz",
              "subject": "Jazz",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 458,
              "name": "LAT (LA-st9)",
              "subject": "LAT",
              "group": "LA-st9",
              "teacher": "Kie"
            },
            {
              "id": 292,
              "name": "FR (FR-9a-9b)",
              "subject": "FR",
              "group": "FR-9a-9b",
              "teacher": "Lüb"
            },
            {
              "id": 293,
              "name": "RU (RU-st9)",
              "subject": "RU",
              "group": "RU-st9",
              "teacher": "Ste"
            },
            {
              "id": 302,
              "name": "REe (RE/e-st9)",
              "subject": "REe",
              "group": "RE/e-st9",
              "teacher": "Bru"
            },
            {
              "id": 303,
              "name": "REk (RE/k-st9)",
              "subject": "REk",
              "group": "RE/k-st9",
              "teacher": "Lüb"
            },
            {
              "id": 311,
              "name": "SPOm (SPm-st9)",
              "subject": "SPOm",
              "group": "SPm-st9",
              "teacher": "Mel"
            },
            {
              "id": 312,
              "name": "DE",
              "subject": "DE",
              "group": null,
              "teacher": "Leh"
            },
            {
              "id": 313,
              "name": "EN",
              "subject": "EN",
              "group": null,
              "teacher": "Din"
            },
            {
              "id": 326,
              "name": "ETH (ETH-9bc)",
              "subject": "ETH",
              "group": "ETH-9bc",
              "teacher": null
            },
            {
              "id": 327,
              "name": "KU",
              "subject": "KU",
              "group": null,
              "teacher": "Süm"
            },
            {
              "id": 316,
              "name": "MA",
              "subject": "MA",
              "group": null,
              "teacher": "Scg"
            },
            {
              "id": 317,
              "name": "BIO",
              "subject": "BIO",
              "group": null,
              "teacher": "Met"
            },
            {
              "id": 318,
              "name": "CH",
              "subject": "CH",
              "group": null,
              "teacher": "Met"
            },
            {
              "id": 319,
              "name": "PH",
              "subject": "PH",
              "group": null,
              "teacher": "Gla"
            },
            {
              "id": 320,
              "name": "GE",
              "subject": "GE",
              "group": null,
              "teacher": "Kie"
            },
            {
              "id": 321,
              "name": "GRW",
              "subject": "GRW",
              "group": null,
              "teacher": "Ber"
            },
            {
              "id": 322,
              "name": "GEO",
              "subject": "GEO",
              "group": null,
              "teacher": "Sch"
            },
            {
              "id": 330,
              "name": "INF",
              "subject": "INF",
              "group": null,
              "teacher": "Shu"
            },
            {
              "id": 328,
              "name": "MU",
              "subject": "MU",
              "group": null,
              "teacher": "Höl"
            },
            {
              "id": 331,
              "name": "P:gw (GEWI-st9)",
              "subject": "P:gw",
              "group": "GEWI-st9",
              "teacher": "Mar"
            },
            {
              "id": 332,
              "name": "P:nw (NAWI-st9)",
              "subject": "P:nw",
              "group": "NAWI-st9",
              "teacher": "Gün"
            },
            {
              "id": 353,
              "name": "SPOw (SPw-9b)",
              "subject": "SPOw",
              "group": "SPw-9b",
              "teacher": "Göb"
            },
            {
              "id": 453,
              "name": "Nach",
              "subject": "Nach",
              "group": null,
              "teacher": "n.n."
            }
          ],
          "plannedLessons": [
            {
              "id": 316,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Scg" },
              "room": { "changed": false, "value": "E1.15" },
              "schoolClass": "9b",
              "info": null
            },
            {
              "id": 293,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "RU-st9" },
              "teacher": { "changed": false, "value": "Ste" },
              "room": { "changed": false, "value": "E1.13" },
              "schoolClass": "9b",
              "info": null
            },
            {
              "id": 292,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": true, "value": "---" },
              "teacher": { "changed": true, "value": null },
              "room": { "changed": true, "value": null },
              "schoolClass": "9b",
              "info": "FR-9a-9b Frau Lübke fällt aus, bitte in die Mensa gehen."
            },
            {
              "id": 353,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "SPw-9b" },
              "teacher": { "changed": false, "value": "Göb" },
              "room": { "changed": false, "value": "TH 1" },
              "schoolClass": "9b",
              "info": null
            },
            {
              "id": 320,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "GE" },
              "teacher": { "changed": false, "value": "Kie" },
              "room": { "changed": false, "value": "E1.15" },
              "schoolClass": "9b",
              "info": null
            },
            {
              "id": 312,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "Leh" },
              "room": { "changed": false, "value": "S2.17" },
              "schoolClass": "9b",
              "info": null
            },
            {
              "id": 302,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "RE/e-st9" },
              "teacher": { "changed": false, "value": "Bru" },
              "room": { "changed": false, "value": "E1.13" },
              "schoolClass": "9b",
              "info": null
            },
            {
              "id": 303,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": true, "value": "---" },
              "teacher": { "changed": true, "value": null },
              "room": { "changed": true, "value": null },
              "schoolClass": "9b",
              "info": "RE/ k-st9 Frau Lübke fällt aus, bitte in die Mensa gehen."
            }
          ]
        },
        {
          "name": "9c",
          "type": "schoolClass",
          "timetable": [
            {
              "id": 796,
              "name": "P:nw (NAWI-st9)",
              "subject": "P:nw",
              "group": "NAWI-st9",
              "teacher": "Met"
            },
            {
              "id": 795,
              "name": "P:gw (GEWI-st9)",
              "subject": "P:gw",
              "group": "GEWI-st9",
              "teacher": "Mar"
            },
            {
              "id": 715,
              "name": "Jazz",
              "subject": "Jazz",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 458,
              "name": "LAT (LA-st9)",
              "subject": "LAT",
              "group": "LA-st9",
              "teacher": "Kie"
            },
            {
              "id": 293,
              "name": "RU (RU-st9)",
              "subject": "RU",
              "group": "RU-st9",
              "teacher": "Ste"
            },
            {
              "id": 302,
              "name": "REe (RE/e-st9)",
              "subject": "REe",
              "group": "RE/e-st9",
              "teacher": "Bru"
            },
            {
              "id": 303,
              "name": "REk (RE/k-st9)",
              "subject": "REk",
              "group": "RE/k-st9",
              "teacher": "Lüb"
            },
            {
              "id": 304,
              "name": "ETH (ETH-9ac)",
              "subject": "ETH",
              "group": "ETH-9ac",
              "teacher": "Zin"
            },
            {
              "id": 311,
              "name": "SPOm (SPm-st9)",
              "subject": "SPOm",
              "group": "SPm-st9",
              "teacher": "Mel"
            },
            {
              "id": 326,
              "name": "ETH (ETH-9bc)",
              "subject": "ETH",
              "group": "ETH-9bc",
              "teacher": null
            },
            {
              "id": 331,
              "name": "P:gw (GEWI-st9)",
              "subject": "P:gw",
              "group": "GEWI-st9",
              "teacher": "Mar"
            },
            {
              "id": 332,
              "name": "P:nw (NAWI-st9)",
              "subject": "P:nw",
              "group": "NAWI-st9",
              "teacher": "Gün"
            },
            {
              "id": 333,
              "name": "DE",
              "subject": "DE",
              "group": null,
              "teacher": "Leh"
            },
            {
              "id": 334,
              "name": "EN",
              "subject": "EN",
              "group": null,
              "teacher": "Sei"
            },
            {
              "id": 335,
              "name": "FR (FR-9c)",
              "subject": "FR",
              "group": "FR-9c",
              "teacher": "Kra"
            },
            {
              "id": 348,
              "name": "KU",
              "subject": "KU",
              "group": null,
              "teacher": "Süm"
            },
            {
              "id": 337,
              "name": "MA",
              "subject": "MA",
              "group": null,
              "teacher": "Vet"
            },
            {
              "id": 338,
              "name": "BIO",
              "subject": "BIO",
              "group": null,
              "teacher": "Met"
            },
            {
              "id": 339,
              "name": "CH",
              "subject": "CH",
              "group": null,
              "teacher": "Met"
            },
            {
              "id": 340,
              "name": "PH",
              "subject": "PH",
              "group": null,
              "teacher": "Kok"
            },
            {
              "id": 341,
              "name": "GE",
              "subject": "GE",
              "group": null,
              "teacher": "Kie"
            },
            {
              "id": 800,
              "name": "GRW",
              "subject": "GRW",
              "group": null,
              "teacher": "Ber"
            },
            {
              "id": 343,
              "name": "GEO",
              "subject": "GEO",
              "group": null,
              "teacher": "Sch"
            },
            {
              "id": 350,
              "name": "INF",
              "subject": "INF",
              "group": null,
              "teacher": "Shu"
            },
            {
              "id": 349,
              "name": "MU",
              "subject": "MU",
              "group": null,
              "teacher": "Höl"
            },
            {
              "id": 352,
              "name": "SPOw (SPw-9ac)",
              "subject": "SPOw",
              "group": "SPw-9ac",
              "teacher": "Göb"
            },
            {
              "id": 453,
              "name": "Nach",
              "subject": "Nach",
              "group": null,
              "teacher": "n.n."
            },
            {
              "id": -1,
              "name": "ETH-9ac",
              "subject": "ETH-9ac",
              "teacher": "Zin"
            },
            {
              "id": -1,
              "name": "ETH-9bc",
              "subject": "ETH-9bc",
              "teacher": null
            },
            { "id": -1, "name": "FR-9c", "subject": "FR-9c", "teacher": "Kra" },
            {
              "id": -1,
              "name": "GEWI-st9",
              "subject": "GEWI-st9",
              "teacher": "Mar"
            },
            {
              "id": -1,
              "name": "LA-st9",
              "subject": "LA-st9",
              "teacher": "Kie"
            },
            {
              "id": -1,
              "name": "NAWI-st9",
              "subject": "NAWI-st9",
              "teacher": "Gün"
            },
            {
              "id": -1,
              "name": "NAWI-st9",
              "subject": "NAWI-st9",
              "teacher": "Met"
            },
            {
              "id": -1,
              "name": "RE/e-st9",
              "subject": "RE/e-st9",
              "teacher": "Bru"
            },
            {
              "id": -1,
              "name": "RE/k-st9",
              "subject": "RE/k-st9",
              "teacher": "Lüb"
            },
            {
              "id": -1,
              "name": "RU-st9",
              "subject": "RU-st9",
              "teacher": "Ste"
            },
            {
              "id": -1,
              "name": "SPm-st9",
              "subject": "SPm-st9",
              "teacher": "Mel"
            },
            {
              "id": -1,
              "name": "SPw-9ac",
              "subject": "SPw-9ac",
              "teacher": "Göb"
            }
          ],
          "courses": [
            { "subject": "ETH-9ac", "teacher": "Zin" },
            { "subject": "ETH-9bc", "teacher": null },
            { "subject": "FR-9c", "teacher": "Kra" },
            { "subject": "GEWI-st9", "teacher": "Mar" },
            { "subject": "LA-st9", "teacher": "Kie" },
            { "subject": "NAWI-st9", "teacher": "Gün" },
            { "subject": "NAWI-st9", "teacher": "Met" },
            { "subject": "RE/e-st9", "teacher": "Bru" },
            { "subject": "RE/k-st9", "teacher": "Lüb" },
            { "subject": "RU-st9", "teacher": "Ste" },
            { "subject": "SPm-st9", "teacher": "Mel" },
            { "subject": "SPw-9ac", "teacher": "Göb" }
          ],
          "lessons": [
            {
              "id": 796,
              "name": "P:nw (NAWI-st9)",
              "subject": "P:nw",
              "group": "NAWI-st9",
              "teacher": "Met"
            },
            {
              "id": 795,
              "name": "P:gw (GEWI-st9)",
              "subject": "P:gw",
              "group": "GEWI-st9",
              "teacher": "Mar"
            },
            {
              "id": 715,
              "name": "Jazz",
              "subject": "Jazz",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 458,
              "name": "LAT (LA-st9)",
              "subject": "LAT",
              "group": "LA-st9",
              "teacher": "Kie"
            },
            {
              "id": 293,
              "name": "RU (RU-st9)",
              "subject": "RU",
              "group": "RU-st9",
              "teacher": "Ste"
            },
            {
              "id": 302,
              "name": "REe (RE/e-st9)",
              "subject": "REe",
              "group": "RE/e-st9",
              "teacher": "Bru"
            },
            {
              "id": 303,
              "name": "REk (RE/k-st9)",
              "subject": "REk",
              "group": "RE/k-st9",
              "teacher": "Lüb"
            },
            {
              "id": 304,
              "name": "ETH (ETH-9ac)",
              "subject": "ETH",
              "group": "ETH-9ac",
              "teacher": "Zin"
            },
            {
              "id": 311,
              "name": "SPOm (SPm-st9)",
              "subject": "SPOm",
              "group": "SPm-st9",
              "teacher": "Mel"
            },
            {
              "id": 326,
              "name": "ETH (ETH-9bc)",
              "subject": "ETH",
              "group": "ETH-9bc",
              "teacher": null
            },
            {
              "id": 331,
              "name": "P:gw (GEWI-st9)",
              "subject": "P:gw",
              "group": "GEWI-st9",
              "teacher": "Mar"
            },
            {
              "id": 332,
              "name": "P:nw (NAWI-st9)",
              "subject": "P:nw",
              "group": "NAWI-st9",
              "teacher": "Gün"
            },
            {
              "id": 333,
              "name": "DE",
              "subject": "DE",
              "group": null,
              "teacher": "Leh"
            },
            {
              "id": 334,
              "name": "EN",
              "subject": "EN",
              "group": null,
              "teacher": "Sei"
            },
            {
              "id": 335,
              "name": "FR (FR-9c)",
              "subject": "FR",
              "group": "FR-9c",
              "teacher": "Kra"
            },
            {
              "id": 348,
              "name": "KU",
              "subject": "KU",
              "group": null,
              "teacher": "Süm"
            },
            {
              "id": 337,
              "name": "MA",
              "subject": "MA",
              "group": null,
              "teacher": "Vet"
            },
            {
              "id": 338,
              "name": "BIO",
              "subject": "BIO",
              "group": null,
              "teacher": "Met"
            },
            {
              "id": 339,
              "name": "CH",
              "subject": "CH",
              "group": null,
              "teacher": "Met"
            },
            {
              "id": 340,
              "name": "PH",
              "subject": "PH",
              "group": null,
              "teacher": "Kok"
            },
            {
              "id": 341,
              "name": "GE",
              "subject": "GE",
              "group": null,
              "teacher": "Kie"
            },
            {
              "id": 800,
              "name": "GRW",
              "subject": "GRW",
              "group": null,
              "teacher": "Ber"
            },
            {
              "id": 343,
              "name": "GEO",
              "subject": "GEO",
              "group": null,
              "teacher": "Sch"
            },
            {
              "id": 350,
              "name": "INF",
              "subject": "INF",
              "group": null,
              "teacher": "Shu"
            },
            {
              "id": 349,
              "name": "MU",
              "subject": "MU",
              "group": null,
              "teacher": "Höl"
            },
            {
              "id": 352,
              "name": "SPOw (SPw-9ac)",
              "subject": "SPOw",
              "group": "SPw-9ac",
              "teacher": "Göb"
            },
            {
              "id": 453,
              "name": "Nach",
              "subject": "Nach",
              "group": null,
              "teacher": "n.n."
            }
          ],
          "plannedLessons": [
            {
              "id": 333,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "Leh" },
              "room": { "changed": false, "value": "E2.09" },
              "schoolClass": "9c",
              "info": null
            },
            {
              "id": 293,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "RU-st9" },
              "teacher": { "changed": false, "value": "Ste" },
              "room": { "changed": false, "value": "E1.13" },
              "schoolClass": "9c",
              "info": null
            },
            {
              "id": 335,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "FR-9c" },
              "teacher": { "changed": false, "value": "Kra" },
              "room": { "changed": false, "value": "E2.13" },
              "schoolClass": "9c",
              "info": null
            },
            {
              "id": 348,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "KU" },
              "teacher": { "changed": false, "value": "Süm" },
              "room": { "changed": false, "value": "M1.08" },
              "schoolClass": "9c",
              "info": null
            },
            {
              "id": 334,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": true, "value": "EN" },
              "teacher": { "changed": true, "value": "Sei" },
              "room": { "changed": true, "value": "E2.09" },
              "schoolClass": "9c",
              "info": "statt Mi (04.09.) St.6, Raum geändert; INF Frau Schuppan fällt aus"
            },
            {
              "id": 343,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "GEO" },
              "teacher": { "changed": false, "value": "Sch" },
              "room": { "changed": false, "value": "E0.07" },
              "schoolClass": "9c",
              "info": null
            },
            {
              "id": 302,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "RE/e-st9" },
              "teacher": { "changed": false, "value": "Bru" },
              "room": { "changed": false, "value": "E1.13" },
              "schoolClass": "9c",
              "info": null
            },
            {
              "id": 304,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "ETH-9ac" },
              "teacher": { "changed": false, "value": "Zin" },
              "room": { "changed": false, "value": "E0.09" },
              "schoolClass": "9c",
              "info": null
            },
            {
              "id": 303,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": true, "value": "---" },
              "teacher": { "changed": true, "value": null },
              "room": { "changed": true, "value": null },
              "schoolClass": "9c",
              "info": "RE/ k-st9 Frau Lübke fällt aus, bitte in die Mensa gehen."
            }
          ]
        },
        {
          "name": "10 Kla",
          "type": "schoolClass",
          "timetable": [
            {
              "id": 844,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Sca"
            },
            {
              "id": 845,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Lie"
            },
            {
              "id": 849,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Lie"
            },
            {
              "id": 850,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Lie"
            },
            {
              "id": 858,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Paw"
            },
            {
              "id": 859,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Sca"
            },
            {
              "id": 865,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Lie"
            },
            {
              "id": 866,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Sca"
            },
            {
              "id": 878,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Gra"
            }
          ],
          "courses": [],
          "lessons": [
            {
              "id": 844,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Sca"
            },
            {
              "id": 845,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Lie"
            },
            {
              "id": 849,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Lie"
            },
            {
              "id": 850,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Lie"
            },
            {
              "id": 858,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Paw"
            },
            {
              "id": 859,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Sca"
            },
            {
              "id": 865,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Lie"
            },
            {
              "id": 866,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Sca"
            },
            {
              "id": 878,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Gra"
            }
          ],
          "plannedLessons": []
        },
        {
          "name": "10 St",
          "type": "schoolClass",
          "timetable": [
            {
              "id": 807,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Scö"
            },
            {
              "id": 808,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Fuchs"
            },
            {
              "id": 811,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Fuchs"
            },
            {
              "id": 816,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 817,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Paw"
            },
            {
              "id": 819,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 835,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Scö"
            },
            {
              "id": 836,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 838,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 843,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Scö"
            },
            {
              "id": 879,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Paw"
            },
            {
              "id": 880,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Paw"
            }
          ],
          "courses": [],
          "lessons": [
            {
              "id": 807,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Scö"
            },
            {
              "id": 808,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Fuchs"
            },
            {
              "id": 811,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Fuchs"
            },
            {
              "id": 816,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 817,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Paw"
            },
            {
              "id": 819,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 835,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Scö"
            },
            {
              "id": 836,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 838,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 843,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Scö"
            },
            {
              "id": 879,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Paw"
            },
            {
              "id": 880,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Paw"
            }
          ],
          "plannedLessons": []
        },
        {
          "name": "10a",
          "type": "schoolClass",
          "timetable": [
            {
              "id": 773,
              "name": "ACHM2 (achoM2)",
              "subject": "ACHM2",
              "group": "achoM2",
              "teacher": "Kus"
            },
            {
              "id": 715,
              "name": "Jazz",
              "subject": "Jazz",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 772,
              "name": "ACHJ2 (achoJ2)",
              "subject": "ACHJ2",
              "group": "achoJ2",
              "teacher": "Lie"
            },
            {
              "id": 725,
              "name": "AG J",
              "subject": "AG J",
              "group": null,
              "teacher": "Göb"
            },
            {
              "id": 354,
              "name": "DE",
              "subject": "DE",
              "group": null,
              "teacher": "Vet"
            },
            {
              "id": 355,
              "name": "EN",
              "subject": "EN",
              "group": null,
              "teacher": "Scl"
            },
            {
              "id": 356,
              "name": "FR (FR-10ac)",
              "subject": "FR",
              "group": "FR-10ac",
              "teacher": "Kra"
            },
            {
              "id": 357,
              "name": "RU (RU-10ac)",
              "subject": "RU",
              "group": "RU-10ac",
              "teacher": "Ste"
            },
            {
              "id": 358,
              "name": "MA",
              "subject": "MA",
              "group": null,
              "teacher": "Scg"
            },
            {
              "id": 359,
              "name": "BIO",
              "subject": "BIO",
              "group": null,
              "teacher": "Met"
            },
            {
              "id": 360,
              "name": "CH",
              "subject": "CH",
              "group": null,
              "teacher": "Met"
            },
            {
              "id": 361,
              "name": "PH",
              "subject": "PH",
              "group": null,
              "teacher": "Gün"
            },
            {
              "id": 362,
              "name": "GE",
              "subject": "GE",
              "group": null,
              "teacher": "Pau"
            },
            {
              "id": 363,
              "name": "GRW",
              "subject": "GRW",
              "group": null,
              "teacher": "Len"
            },
            {
              "id": 364,
              "name": "GEO",
              "subject": "GEO",
              "group": null,
              "teacher": "Kön"
            },
            {
              "id": 797,
              "name": "SPOm (SPm10ad)",
              "subject": "SPOm",
              "group": "SPm10ad",
              "teacher": "Scg"
            },
            {
              "id": 366,
              "name": "REe (REe-st10)",
              "subject": "REe",
              "group": "REe-st10",
              "teacher": "Bru"
            },
            {
              "id": 367,
              "name": "REk (REk-st10)",
              "subject": "REk",
              "group": "REk-st10",
              "teacher": "Lüb"
            },
            {
              "id": 368,
              "name": "ETH (ETH-10ab)",
              "subject": "ETH",
              "group": "ETH-10ab",
              "teacher": "Zin"
            },
            {
              "id": 369,
              "name": "KU",
              "subject": "KU",
              "group": null,
              "teacher": "Kön"
            },
            {
              "id": 370,
              "name": "MU",
              "subject": "MU",
              "group": null,
              "teacher": "Paw"
            },
            {
              "id": 371,
              "name": "INF",
              "subject": "INF",
              "group": null,
              "teacher": "Gie"
            },
            {
              "id": 374,
              "name": "PH",
              "subject": "PH",
              "group": null,
              "teacher": "Gün"
            },
            {
              "id": 373,
              "name": "CH",
              "subject": "CH",
              "group": null,
              "teacher": "Met"
            },
            {
              "id": 375,
              "name": "SPOw (SPw10ad)",
              "subject": "SPOw",
              "group": "SPw10ad",
              "teacher": "BoM"
            },
            {
              "id": 376,
              "name": "MUHG",
              "subject": "MUHG",
              "group": null,
              "teacher": "Paw"
            },
            {
              "id": 377,
              "name": "MUHG",
              "subject": "MUHG",
              "group": null,
              "teacher": "Paw"
            },
            {
              "id": 419,
              "name": "ETH (ETH10acd)",
              "subject": "ETH",
              "group": "ETH10acd",
              "teacher": null
            },
            {
              "id": 453,
              "name": "Nach",
              "subject": "Nach",
              "group": null,
              "teacher": "n.n."
            },
            {
              "id": 615,
              "name": "CHJ (choJ)",
              "subject": "CHJ",
              "group": "choJ",
              "teacher": "CHLJ"
            },
            {
              "id": 616,
              "name": "CHM (choM)",
              "subject": "CHM",
              "group": "choM",
              "teacher": "CHLM"
            },
            {
              "id": 617,
              "name": "ENS2 (ens2)",
              "subject": "ENS2",
              "group": "ens2",
              "teacher": "Sca"
            },
            {
              "id": 785,
              "name": "ACHM2 (achoM2)",
              "subject": "ACHM2",
              "group": "achoM2",
              "teacher": "Kus"
            },
            {
              "id": 784,
              "name": "ACHJ2 (achoJ2)",
              "subject": "ACHJ2",
              "group": "achoJ2",
              "teacher": "Lie"
            },
            {
              "id": 803,
              "name": "LAT (LA-10ac)",
              "subject": "LAT",
              "group": "LA-10ac",
              "teacher": "Gra"
            },
            {
              "id": -1,
              "name": "achoJ2",
              "subject": "achoJ2",
              "teacher": "Lie"
            },
            {
              "id": -1,
              "name": "achoM2",
              "subject": "achoM2",
              "teacher": "Kus"
            },
            { "id": -1, "name": "choJ", "subject": "choJ", "teacher": "CHLJ" },
            { "id": -1, "name": "choM", "subject": "choM", "teacher": "CHLM" },
            { "id": -1, "name": "ens2", "subject": "ens2", "teacher": "Sca" },
            {
              "id": -1,
              "name": "ETH-10ab",
              "subject": "ETH-10ab",
              "teacher": "Zin"
            },
            {
              "id": -1,
              "name": "ETH10acd",
              "subject": "ETH10acd",
              "teacher": null
            },
            {
              "id": -1,
              "name": "FR-10ac",
              "subject": "FR-10ac",
              "teacher": "Kra"
            },
            {
              "id": -1,
              "name": "LA-10ac",
              "subject": "LA-10ac",
              "teacher": "Gra"
            },
            {
              "id": -1,
              "name": "REe-st10",
              "subject": "REe-st10",
              "teacher": "Bru"
            },
            {
              "id": -1,
              "name": "REk-st10",
              "subject": "REk-st10",
              "teacher": "Lüb"
            },
            {
              "id": -1,
              "name": "RU-10ac",
              "subject": "RU-10ac",
              "teacher": "Ste"
            },
            {
              "id": -1,
              "name": "SPm10ad",
              "subject": "SPm10ad",
              "teacher": "Scg"
            },
            {
              "id": -1,
              "name": "SPw10ad",
              "subject": "SPw10ad",
              "teacher": "BoM"
            }
          ],
          "courses": [
            { "subject": "achoJ2", "teacher": "Lie" },
            { "subject": "achoM2", "teacher": "Kus" },
            { "subject": "choJ", "teacher": "CHLJ" },
            { "subject": "choM", "teacher": "CHLM" },
            { "subject": "ens2", "teacher": "Sca" },
            { "subject": "ETH-10ab", "teacher": "Zin" },
            { "subject": "ETH10acd", "teacher": null },
            { "subject": "FR-10ac", "teacher": "Kra" },
            { "subject": "LA-10ac", "teacher": "Gra" },
            { "subject": "REe-st10", "teacher": "Bru" },
            { "subject": "REk-st10", "teacher": "Lüb" },
            { "subject": "RU-10ac", "teacher": "Ste" },
            { "subject": "SPm10ad", "teacher": "Scg" },
            { "subject": "SPw10ad", "teacher": "BoM" }
          ],
          "lessons": [
            {
              "id": 773,
              "name": "ACHM2 (achoM2)",
              "subject": "ACHM2",
              "group": "achoM2",
              "teacher": "Kus"
            },
            {
              "id": 715,
              "name": "Jazz",
              "subject": "Jazz",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 772,
              "name": "ACHJ2 (achoJ2)",
              "subject": "ACHJ2",
              "group": "achoJ2",
              "teacher": "Lie"
            },
            {
              "id": 725,
              "name": "AG J",
              "subject": "AG J",
              "group": null,
              "teacher": "Göb"
            },
            {
              "id": 354,
              "name": "DE",
              "subject": "DE",
              "group": null,
              "teacher": "Vet"
            },
            {
              "id": 355,
              "name": "EN",
              "subject": "EN",
              "group": null,
              "teacher": "Scl"
            },
            {
              "id": 356,
              "name": "FR (FR-10ac)",
              "subject": "FR",
              "group": "FR-10ac",
              "teacher": "Kra"
            },
            {
              "id": 357,
              "name": "RU (RU-10ac)",
              "subject": "RU",
              "group": "RU-10ac",
              "teacher": "Ste"
            },
            {
              "id": 358,
              "name": "MA",
              "subject": "MA",
              "group": null,
              "teacher": "Scg"
            },
            {
              "id": 359,
              "name": "BIO",
              "subject": "BIO",
              "group": null,
              "teacher": "Met"
            },
            {
              "id": 360,
              "name": "CH",
              "subject": "CH",
              "group": null,
              "teacher": "Met"
            },
            {
              "id": 361,
              "name": "PH",
              "subject": "PH",
              "group": null,
              "teacher": "Gün"
            },
            {
              "id": 362,
              "name": "GE",
              "subject": "GE",
              "group": null,
              "teacher": "Pau"
            },
            {
              "id": 363,
              "name": "GRW",
              "subject": "GRW",
              "group": null,
              "teacher": "Len"
            },
            {
              "id": 364,
              "name": "GEO",
              "subject": "GEO",
              "group": null,
              "teacher": "Kön"
            },
            {
              "id": 797,
              "name": "SPOm (SPm10ad)",
              "subject": "SPOm",
              "group": "SPm10ad",
              "teacher": "Scg"
            },
            {
              "id": 366,
              "name": "REe (REe-st10)",
              "subject": "REe",
              "group": "REe-st10",
              "teacher": "Bru"
            },
            {
              "id": 367,
              "name": "REk (REk-st10)",
              "subject": "REk",
              "group": "REk-st10",
              "teacher": "Lüb"
            },
            {
              "id": 368,
              "name": "ETH (ETH-10ab)",
              "subject": "ETH",
              "group": "ETH-10ab",
              "teacher": "Zin"
            },
            {
              "id": 369,
              "name": "KU",
              "subject": "KU",
              "group": null,
              "teacher": "Kön"
            },
            {
              "id": 370,
              "name": "MU",
              "subject": "MU",
              "group": null,
              "teacher": "Paw"
            },
            {
              "id": 371,
              "name": "INF",
              "subject": "INF",
              "group": null,
              "teacher": "Gie"
            },
            {
              "id": 374,
              "name": "PH",
              "subject": "PH",
              "group": null,
              "teacher": "Gün"
            },
            {
              "id": 373,
              "name": "CH",
              "subject": "CH",
              "group": null,
              "teacher": "Met"
            },
            {
              "id": 375,
              "name": "SPOw (SPw10ad)",
              "subject": "SPOw",
              "group": "SPw10ad",
              "teacher": "BoM"
            },
            {
              "id": 376,
              "name": "MUHG",
              "subject": "MUHG",
              "group": null,
              "teacher": "Paw"
            },
            {
              "id": 377,
              "name": "MUHG",
              "subject": "MUHG",
              "group": null,
              "teacher": "Paw"
            },
            {
              "id": 419,
              "name": "ETH (ETH10acd)",
              "subject": "ETH",
              "group": "ETH10acd",
              "teacher": null
            },
            {
              "id": 453,
              "name": "Nach",
              "subject": "Nach",
              "group": null,
              "teacher": "n.n."
            },
            {
              "id": 615,
              "name": "CHJ (choJ)",
              "subject": "CHJ",
              "group": "choJ",
              "teacher": "CHLJ"
            },
            {
              "id": 616,
              "name": "CHM (choM)",
              "subject": "CHM",
              "group": "choM",
              "teacher": "CHLM"
            },
            {
              "id": 617,
              "name": "ENS2 (ens2)",
              "subject": "ENS2",
              "group": "ens2",
              "teacher": "Sca"
            },
            {
              "id": 785,
              "name": "ACHM2 (achoM2)",
              "subject": "ACHM2",
              "group": "achoM2",
              "teacher": "Kus"
            },
            {
              "id": 784,
              "name": "ACHJ2 (achoJ2)",
              "subject": "ACHJ2",
              "group": "achoJ2",
              "teacher": "Lie"
            },
            {
              "id": 803,
              "name": "LAT (LA-10ac)",
              "subject": "LAT",
              "group": "LA-10ac",
              "teacher": "Gra"
            }
          ],
          "plannedLessons": [
            {
              "id": 369,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "KU" },
              "teacher": { "changed": false, "value": "Kön" },
              "room": { "changed": false, "value": "M1.05" },
              "schoolClass": "10a",
              "info": null
            },
            {
              "id": 374,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "PH" },
              "teacher": { "changed": false, "value": "Gün" },
              "room": { "changed": false, "value": "E1.18" },
              "schoolClass": "10a",
              "info": null
            },
            {
              "id": 360,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "CH" },
              "teacher": { "changed": false, "value": "Met" },
              "room": { "changed": false, "value": "E2.19" },
              "schoolClass": "10a",
              "info": null
            },
            {
              "id": 361,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "PH" },
              "teacher": { "changed": false, "value": "Gün" },
              "room": { "changed": false, "value": "E1.18" },
              "schoolClass": "10a",
              "info": null
            },
            {
              "id": 373,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "CH" },
              "teacher": { "changed": false, "value": "Met" },
              "room": { "changed": false, "value": "E2.19" },
              "schoolClass": "10a",
              "info": null
            },
            {
              "id": 362,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "GE" },
              "teacher": { "changed": false, "value": "Pau" },
              "room": { "changed": false, "value": "E2.07" },
              "schoolClass": "10a",
              "info": null
            },
            {
              "id": 354,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "Vet" },
              "room": { "changed": false, "value": "E0.14" },
              "schoolClass": "10a",
              "info": null
            },
            {
              "id": 615,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "choJ" },
              "teacher": { "changed": false, "value": "CHLJ Scö" },
              "room": { "changed": false, "value": null },
              "schoolClass": "10a",
              "info": null
            },
            {
              "id": 616,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "choM" },
              "teacher": { "changed": false, "value": "CHLM Paw" },
              "room": { "changed": false, "value": "S2.17" },
              "schoolClass": "10a",
              "info": null
            },
            {
              "id": 617,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "ens2" },
              "teacher": { "changed": false, "value": "Sca" },
              "room": { "changed": false, "value": "A0.09" },
              "schoolClass": "10a",
              "info": null
            },
            {
              "id": 615,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "choJ" },
              "teacher": { "changed": false, "value": "CHLJ Scö" },
              "room": { "changed": false, "value": null },
              "schoolClass": "10a",
              "info": null
            },
            {
              "id": 616,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "choM" },
              "teacher": { "changed": false, "value": "CHLM Paw" },
              "room": { "changed": false, "value": "S2.17" },
              "schoolClass": "10a",
              "info": null
            },
            {
              "id": 617,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "ens2" },
              "teacher": { "changed": false, "value": "Sca" },
              "room": { "changed": false, "value": "A0.09" },
              "schoolClass": "10a",
              "info": null
            }
          ]
        },
        {
          "name": "10b",
          "type": "schoolClass",
          "timetable": [
            {
              "id": 715,
              "name": "Jazz",
              "subject": "Jazz",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 366,
              "name": "REe (REe-st10)",
              "subject": "REe",
              "group": "REe-st10",
              "teacher": "Bru"
            },
            {
              "id": 367,
              "name": "REk (REk-st10)",
              "subject": "REk",
              "group": "REk-st10",
              "teacher": "Lüb"
            },
            {
              "id": 368,
              "name": "ETH (ETH-10ab)",
              "subject": "ETH",
              "group": "ETH-10ab",
              "teacher": "Zin"
            },
            {
              "id": 378,
              "name": "DE",
              "subject": "DE",
              "group": null,
              "teacher": "Vet"
            },
            {
              "id": 379,
              "name": "EN",
              "subject": "EN",
              "group": null,
              "teacher": "Scl"
            },
            {
              "id": 380,
              "name": "FR (FR-10bd)",
              "subject": "FR",
              "group": "FR-10bd",
              "teacher": "Kra"
            },
            {
              "id": 381,
              "name": "RU (RU-10bd)",
              "subject": "RU",
              "group": "RU-10bd",
              "teacher": "Ste"
            },
            {
              "id": 382,
              "name": "MA",
              "subject": "MA",
              "group": null,
              "teacher": "Gün"
            },
            {
              "id": 383,
              "name": "BIO",
              "subject": "BIO",
              "group": null,
              "teacher": "HoK"
            },
            {
              "id": 384,
              "name": "CH",
              "subject": "CH",
              "group": null,
              "teacher": "Das"
            },
            {
              "id": 385,
              "name": "PH",
              "subject": "PH",
              "group": null,
              "teacher": "Gün"
            },
            {
              "id": 386,
              "name": "GE",
              "subject": "GE",
              "group": null,
              "teacher": "Pol"
            },
            {
              "id": 387,
              "name": "GRW",
              "subject": "GRW",
              "group": null,
              "teacher": "Kie"
            },
            {
              "id": 388,
              "name": "GEO",
              "subject": "GEO",
              "group": null,
              "teacher": "Mar"
            },
            {
              "id": 389,
              "name": "SPOm (SPm10bc)",
              "subject": "SPOm",
              "group": "SPm10bc",
              "teacher": "Scg"
            },
            {
              "id": 396,
              "name": "INF (INF10b-1)",
              "subject": "INF",
              "group": "INF10b-1",
              "teacher": "Shu"
            },
            {
              "id": 395,
              "name": "INF (INF10b-2)",
              "subject": "INF",
              "group": "INF10b-2",
              "teacher": "Gie"
            },
            {
              "id": 393,
              "name": "KU",
              "subject": "KU",
              "group": null,
              "teacher": "Kön"
            },
            {
              "id": 394,
              "name": "MU",
              "subject": "MU",
              "group": null,
              "teacher": "Höl"
            },
            {
              "id": 397,
              "name": "SPOw (SPw10bc)",
              "subject": "SPOw",
              "group": "SPw10bc",
              "teacher": "BoM"
            },
            {
              "id": 398,
              "name": "P:nw (NW-10b)",
              "subject": "P:nw",
              "group": "NW-10b",
              "teacher": "Gün"
            },
            {
              "id": 399,
              "name": "P:gw (GW-10bc)",
              "subject": "P:gw",
              "group": "GW-10bc",
              "teacher": "Mar"
            },
            {
              "id": 453,
              "name": "Nach",
              "subject": "Nach",
              "group": null,
              "teacher": "n.n."
            },
            {
              "id": 459,
              "name": "LAT (LA-10bd)",
              "subject": "LAT",
              "group": "LA-10bd",
              "teacher": "Kie"
            },
            {
              "id": -1,
              "name": "ETH-10ab",
              "subject": "ETH-10ab",
              "teacher": "Zin"
            },
            {
              "id": -1,
              "name": "FR-10bd",
              "subject": "FR-10bd",
              "teacher": "Kra"
            },
            {
              "id": -1,
              "name": "GW-10bc",
              "subject": "GW-10bc",
              "teacher": "Mar"
            },
            {
              "id": -1,
              "name": "INF10b-1",
              "subject": "INF10b-1",
              "teacher": "Shu"
            },
            {
              "id": -1,
              "name": "INF10b-2",
              "subject": "INF10b-2",
              "teacher": "Gie"
            },
            {
              "id": -1,
              "name": "LA-10bd",
              "subject": "LA-10bd",
              "teacher": "Kie"
            },
            {
              "id": -1,
              "name": "NW-10b",
              "subject": "NW-10b",
              "teacher": "Gün"
            },
            {
              "id": -1,
              "name": "REe-st10",
              "subject": "REe-st10",
              "teacher": "Bru"
            },
            {
              "id": -1,
              "name": "REk-st10",
              "subject": "REk-st10",
              "teacher": "Lüb"
            },
            {
              "id": -1,
              "name": "RU-10bd",
              "subject": "RU-10bd",
              "teacher": "Ste"
            },
            {
              "id": -1,
              "name": "SPm10bc",
              "subject": "SPm10bc",
              "teacher": "Scg"
            },
            {
              "id": -1,
              "name": "SPw10bc",
              "subject": "SPw10bc",
              "teacher": "BoM"
            }
          ],
          "courses": [
            { "subject": "ETH-10ab", "teacher": "Zin" },
            { "subject": "FR-10bd", "teacher": "Kra" },
            { "subject": "GW-10bc", "teacher": "Mar" },
            { "subject": "INF10b-1", "teacher": "Shu" },
            { "subject": "INF10b-2", "teacher": "Gie" },
            { "subject": "LA-10bd", "teacher": "Kie" },
            { "subject": "NW-10b", "teacher": "Gün" },
            { "subject": "REe-st10", "teacher": "Bru" },
            { "subject": "REk-st10", "teacher": "Lüb" },
            { "subject": "RU-10bd", "teacher": "Ste" },
            { "subject": "SPm10bc", "teacher": "Scg" },
            { "subject": "SPw10bc", "teacher": "BoM" }
          ],
          "lessons": [
            {
              "id": 715,
              "name": "Jazz",
              "subject": "Jazz",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 366,
              "name": "REe (REe-st10)",
              "subject": "REe",
              "group": "REe-st10",
              "teacher": "Bru"
            },
            {
              "id": 367,
              "name": "REk (REk-st10)",
              "subject": "REk",
              "group": "REk-st10",
              "teacher": "Lüb"
            },
            {
              "id": 368,
              "name": "ETH (ETH-10ab)",
              "subject": "ETH",
              "group": "ETH-10ab",
              "teacher": "Zin"
            },
            {
              "id": 378,
              "name": "DE",
              "subject": "DE",
              "group": null,
              "teacher": "Vet"
            },
            {
              "id": 379,
              "name": "EN",
              "subject": "EN",
              "group": null,
              "teacher": "Scl"
            },
            {
              "id": 380,
              "name": "FR (FR-10bd)",
              "subject": "FR",
              "group": "FR-10bd",
              "teacher": "Kra"
            },
            {
              "id": 381,
              "name": "RU (RU-10bd)",
              "subject": "RU",
              "group": "RU-10bd",
              "teacher": "Ste"
            },
            {
              "id": 382,
              "name": "MA",
              "subject": "MA",
              "group": null,
              "teacher": "Gün"
            },
            {
              "id": 383,
              "name": "BIO",
              "subject": "BIO",
              "group": null,
              "teacher": "HoK"
            },
            {
              "id": 384,
              "name": "CH",
              "subject": "CH",
              "group": null,
              "teacher": "Das"
            },
            {
              "id": 385,
              "name": "PH",
              "subject": "PH",
              "group": null,
              "teacher": "Gün"
            },
            {
              "id": 386,
              "name": "GE",
              "subject": "GE",
              "group": null,
              "teacher": "Pol"
            },
            {
              "id": 387,
              "name": "GRW",
              "subject": "GRW",
              "group": null,
              "teacher": "Kie"
            },
            {
              "id": 388,
              "name": "GEO",
              "subject": "GEO",
              "group": null,
              "teacher": "Mar"
            },
            {
              "id": 389,
              "name": "SPOm (SPm10bc)",
              "subject": "SPOm",
              "group": "SPm10bc",
              "teacher": "Scg"
            },
            {
              "id": 396,
              "name": "INF (INF10b-1)",
              "subject": "INF",
              "group": "INF10b-1",
              "teacher": "Shu"
            },
            {
              "id": 395,
              "name": "INF (INF10b-2)",
              "subject": "INF",
              "group": "INF10b-2",
              "teacher": "Gie"
            },
            {
              "id": 393,
              "name": "KU",
              "subject": "KU",
              "group": null,
              "teacher": "Kön"
            },
            {
              "id": 394,
              "name": "MU",
              "subject": "MU",
              "group": null,
              "teacher": "Höl"
            },
            {
              "id": 397,
              "name": "SPOw (SPw10bc)",
              "subject": "SPOw",
              "group": "SPw10bc",
              "teacher": "BoM"
            },
            {
              "id": 398,
              "name": "P:nw (NW-10b)",
              "subject": "P:nw",
              "group": "NW-10b",
              "teacher": "Gün"
            },
            {
              "id": 399,
              "name": "P:gw (GW-10bc)",
              "subject": "P:gw",
              "group": "GW-10bc",
              "teacher": "Mar"
            },
            {
              "id": 453,
              "name": "Nach",
              "subject": "Nach",
              "group": null,
              "teacher": "n.n."
            },
            {
              "id": 459,
              "name": "LAT (LA-10bd)",
              "subject": "LAT",
              "group": "LA-10bd",
              "teacher": "Kie"
            }
          ],
          "plannedLessons": [
            {
              "id": 378,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "Vet" },
              "room": { "changed": false, "value": "E1.09" },
              "schoolClass": "10b",
              "info": null
            },
            {
              "id": 378,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "Vet" },
              "room": { "changed": false, "value": "E1.09" },
              "schoolClass": "10b",
              "info": null
            },
            {
              "id": 387,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "GRW" },
              "teacher": { "changed": false, "value": "Kie" },
              "room": { "changed": false, "value": "E1.15" },
              "schoolClass": "10b",
              "info": null
            },
            {
              "id": 386,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "GE" },
              "teacher": { "changed": false, "value": "Pol" },
              "room": { "changed": false, "value": "M1.05" },
              "schoolClass": "10b",
              "info": null
            },
            {
              "id": 379,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "EN" },
              "teacher": { "changed": false, "value": "Scl" },
              "room": { "changed": false, "value": "E2.14" },
              "schoolClass": "10b",
              "info": null
            },
            {
              "id": 382,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Gün" },
              "room": { "changed": false, "value": "E1.15" },
              "schoolClass": "10b",
              "info": null
            },
            {
              "id": 459,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "LA-10bd" },
              "teacher": { "changed": false, "value": "Kie" },
              "room": { "changed": false, "value": "E2.14" },
              "schoolClass": "10b",
              "info": null
            }
          ]
        },
        {
          "name": "10c",
          "type": "schoolClass",
          "timetable": [
            {
              "id": 715,
              "name": "Jazz",
              "subject": "Jazz",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 356,
              "name": "FR (FR-10ac)",
              "subject": "FR",
              "group": "FR-10ac",
              "teacher": "Kra"
            },
            {
              "id": 357,
              "name": "RU (RU-10ac)",
              "subject": "RU",
              "group": "RU-10ac",
              "teacher": "Ste"
            },
            {
              "id": 366,
              "name": "REe (REe-st10)",
              "subject": "REe",
              "group": "REe-st10",
              "teacher": "Bru"
            },
            {
              "id": 367,
              "name": "REk (REk-st10)",
              "subject": "REk",
              "group": "REk-st10",
              "teacher": "Lüb"
            },
            {
              "id": 389,
              "name": "SPOm (SPm10bc)",
              "subject": "SPOm",
              "group": "SPm10bc",
              "teacher": "Scg"
            },
            {
              "id": 397,
              "name": "SPOw (SPw10bc)",
              "subject": "SPOw",
              "group": "SPw10bc",
              "teacher": "BoM"
            },
            {
              "id": 399,
              "name": "P:gw (GW-10bc)",
              "subject": "P:gw",
              "group": "GW-10bc",
              "teacher": "Mar"
            },
            {
              "id": 400,
              "name": "DE",
              "subject": "DE",
              "group": null,
              "teacher": "Len"
            },
            {
              "id": 401,
              "name": "EN",
              "subject": "EN",
              "group": null,
              "teacher": "Kle"
            },
            {
              "id": 420,
              "name": "P:nw (NW-10cd)",
              "subject": "P:nw",
              "group": "NW-10cd",
              "teacher": "Gün"
            },
            {
              "id": 415,
              "name": "KU",
              "subject": "KU",
              "group": null,
              "teacher": "Kön"
            },
            {
              "id": 404,
              "name": "MA",
              "subject": "MA",
              "group": null,
              "teacher": "Dom"
            },
            {
              "id": 405,
              "name": "BIO",
              "subject": "BIO",
              "group": null,
              "teacher": "HoK"
            },
            {
              "id": 406,
              "name": "CH",
              "subject": "CH",
              "group": null,
              "teacher": "Met"
            },
            {
              "id": 407,
              "name": "PH",
              "subject": "PH",
              "group": null,
              "teacher": "Gla"
            },
            {
              "id": 408,
              "name": "GE",
              "subject": "GE",
              "group": null,
              "teacher": "SeC"
            },
            {
              "id": 409,
              "name": "GRW",
              "subject": "GRW",
              "group": null,
              "teacher": "Kie"
            },
            {
              "id": 410,
              "name": "GEO",
              "subject": "GEO",
              "group": null,
              "teacher": "Mar"
            },
            {
              "id": 418,
              "name": "INF (INF10c-1)",
              "subject": "INF",
              "group": "INF10c-1",
              "teacher": "Shu"
            },
            {
              "id": 416,
              "name": "MU",
              "subject": "MU",
              "group": null,
              "teacher": "Lie"
            },
            {
              "id": 417,
              "name": "INF (INF10c-2)",
              "subject": "INF",
              "group": "INF10c-2",
              "teacher": "Gie"
            },
            {
              "id": 419,
              "name": "ETH (ETH10acd)",
              "subject": "ETH",
              "group": "ETH10acd",
              "teacher": null
            },
            {
              "id": 453,
              "name": "Nach",
              "subject": "Nach",
              "group": null,
              "teacher": "n.n."
            },
            {
              "id": 803,
              "name": "LAT (LA-10ac)",
              "subject": "LAT",
              "group": "LA-10ac",
              "teacher": "Gra"
            },
            {
              "id": -1,
              "name": "ETH10acd",
              "subject": "ETH10acd",
              "teacher": null
            },
            {
              "id": -1,
              "name": "FR-10ac",
              "subject": "FR-10ac",
              "teacher": "Kra"
            },
            {
              "id": -1,
              "name": "GW-10bc",
              "subject": "GW-10bc",
              "teacher": "Mar"
            },
            {
              "id": -1,
              "name": "INF10c-1",
              "subject": "INF10c-1",
              "teacher": "Shu"
            },
            {
              "id": -1,
              "name": "INF10c-2",
              "subject": "INF10c-2",
              "teacher": "Gie"
            },
            {
              "id": -1,
              "name": "LA-10ac",
              "subject": "LA-10ac",
              "teacher": "Gra"
            },
            {
              "id": -1,
              "name": "NW-10cd",
              "subject": "NW-10cd",
              "teacher": "Gün"
            },
            {
              "id": -1,
              "name": "REe-st10",
              "subject": "REe-st10",
              "teacher": "Bru"
            },
            {
              "id": -1,
              "name": "REk-st10",
              "subject": "REk-st10",
              "teacher": "Lüb"
            },
            {
              "id": -1,
              "name": "RU-10ac",
              "subject": "RU-10ac",
              "teacher": "Ste"
            },
            {
              "id": -1,
              "name": "SPm10bc",
              "subject": "SPm10bc",
              "teacher": "Scg"
            },
            {
              "id": -1,
              "name": "SPw10bc",
              "subject": "SPw10bc",
              "teacher": "BoM"
            }
          ],
          "courses": [
            { "subject": "ETH10acd", "teacher": null },
            { "subject": "FR-10ac", "teacher": "Kra" },
            { "subject": "GW-10bc", "teacher": "Mar" },
            { "subject": "INF10c-1", "teacher": "Shu" },
            { "subject": "INF10c-2", "teacher": "Gie" },
            { "subject": "LA-10ac", "teacher": "Gra" },
            { "subject": "NW-10cd", "teacher": "Gün" },
            { "subject": "REe-st10", "teacher": "Bru" },
            { "subject": "REk-st10", "teacher": "Lüb" },
            { "subject": "RU-10ac", "teacher": "Ste" },
            { "subject": "SPm10bc", "teacher": "Scg" },
            { "subject": "SPw10bc", "teacher": "BoM" }
          ],
          "lessons": [
            {
              "id": 715,
              "name": "Jazz",
              "subject": "Jazz",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 356,
              "name": "FR (FR-10ac)",
              "subject": "FR",
              "group": "FR-10ac",
              "teacher": "Kra"
            },
            {
              "id": 357,
              "name": "RU (RU-10ac)",
              "subject": "RU",
              "group": "RU-10ac",
              "teacher": "Ste"
            },
            {
              "id": 366,
              "name": "REe (REe-st10)",
              "subject": "REe",
              "group": "REe-st10",
              "teacher": "Bru"
            },
            {
              "id": 367,
              "name": "REk (REk-st10)",
              "subject": "REk",
              "group": "REk-st10",
              "teacher": "Lüb"
            },
            {
              "id": 389,
              "name": "SPOm (SPm10bc)",
              "subject": "SPOm",
              "group": "SPm10bc",
              "teacher": "Scg"
            },
            {
              "id": 397,
              "name": "SPOw (SPw10bc)",
              "subject": "SPOw",
              "group": "SPw10bc",
              "teacher": "BoM"
            },
            {
              "id": 399,
              "name": "P:gw (GW-10bc)",
              "subject": "P:gw",
              "group": "GW-10bc",
              "teacher": "Mar"
            },
            {
              "id": 400,
              "name": "DE",
              "subject": "DE",
              "group": null,
              "teacher": "Len"
            },
            {
              "id": 401,
              "name": "EN",
              "subject": "EN",
              "group": null,
              "teacher": "Kle"
            },
            {
              "id": 420,
              "name": "P:nw (NW-10cd)",
              "subject": "P:nw",
              "group": "NW-10cd",
              "teacher": "Gün"
            },
            {
              "id": 415,
              "name": "KU",
              "subject": "KU",
              "group": null,
              "teacher": "Kön"
            },
            {
              "id": 404,
              "name": "MA",
              "subject": "MA",
              "group": null,
              "teacher": "Dom"
            },
            {
              "id": 405,
              "name": "BIO",
              "subject": "BIO",
              "group": null,
              "teacher": "HoK"
            },
            {
              "id": 406,
              "name": "CH",
              "subject": "CH",
              "group": null,
              "teacher": "Met"
            },
            {
              "id": 407,
              "name": "PH",
              "subject": "PH",
              "group": null,
              "teacher": "Gla"
            },
            {
              "id": 408,
              "name": "GE",
              "subject": "GE",
              "group": null,
              "teacher": "SeC"
            },
            {
              "id": 409,
              "name": "GRW",
              "subject": "GRW",
              "group": null,
              "teacher": "Kie"
            },
            {
              "id": 410,
              "name": "GEO",
              "subject": "GEO",
              "group": null,
              "teacher": "Mar"
            },
            {
              "id": 418,
              "name": "INF (INF10c-1)",
              "subject": "INF",
              "group": "INF10c-1",
              "teacher": "Shu"
            },
            {
              "id": 416,
              "name": "MU",
              "subject": "MU",
              "group": null,
              "teacher": "Lie"
            },
            {
              "id": 417,
              "name": "INF (INF10c-2)",
              "subject": "INF",
              "group": "INF10c-2",
              "teacher": "Gie"
            },
            {
              "id": 419,
              "name": "ETH (ETH10acd)",
              "subject": "ETH",
              "group": "ETH10acd",
              "teacher": null
            },
            {
              "id": 453,
              "name": "Nach",
              "subject": "Nach",
              "group": null,
              "teacher": "n.n."
            },
            {
              "id": 803,
              "name": "LAT (LA-10ac)",
              "subject": "LAT",
              "group": "LA-10ac",
              "teacher": "Gra"
            }
          ],
          "plannedLessons": [
            {
              "id": 404,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Dom" },
              "room": { "changed": false, "value": "S1.14" },
              "schoolClass": "10c",
              "info": null
            },
            {
              "id": 404,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Dom" },
              "room": { "changed": false, "value": "S1.14" },
              "schoolClass": "10c",
              "info": null
            },
            {
              "id": 401,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "EN" },
              "teacher": { "changed": false, "value": "Kle" },
              "room": { "changed": false, "value": "E2.09" },
              "schoolClass": "10c",
              "info": null
            },
            {
              "id": 400,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "Len" },
              "room": { "changed": false, "value": "E2.15" },
              "schoolClass": "10c",
              "info": null
            },
            {
              "id": 410,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "GEO" },
              "teacher": { "changed": false, "value": "Mar" },
              "room": { "changed": false, "value": "E0.14" },
              "schoolClass": "10c",
              "info": null
            },
            {
              "id": 405,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "BIO" },
              "teacher": { "changed": false, "value": "HoK" },
              "room": { "changed": false, "value": "E0.18" },
              "schoolClass": "10c",
              "info": null
            }
          ]
        },
        {
          "name": "10d",
          "type": "schoolClass",
          "timetable": [
            {
              "id": 715,
              "name": "Jazz",
              "subject": "Jazz",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 797,
              "name": "SPOm (SPm10ad)",
              "subject": "SPOm",
              "group": "SPm10ad",
              "teacher": "Scg"
            },
            {
              "id": 366,
              "name": "REe (REe-st10)",
              "subject": "REe",
              "group": "REe-st10",
              "teacher": "Bru"
            },
            {
              "id": 367,
              "name": "REk (REk-st10)",
              "subject": "REk",
              "group": "REk-st10",
              "teacher": "Lüb"
            },
            {
              "id": 375,
              "name": "SPOw (SPw10ad)",
              "subject": "SPOw",
              "group": "SPw10ad",
              "teacher": "BoM"
            },
            {
              "id": 380,
              "name": "FR (FR-10bd)",
              "subject": "FR",
              "group": "FR-10bd",
              "teacher": "Kra"
            },
            {
              "id": 381,
              "name": "RU (RU-10bd)",
              "subject": "RU",
              "group": "RU-10bd",
              "teacher": "Ste"
            },
            {
              "id": 440,
              "name": "P:gw (GW-10d)",
              "subject": "P:gw",
              "group": "GW-10d",
              "teacher": "Küh"
            },
            {
              "id": 420,
              "name": "P:nw (NW-10cd)",
              "subject": "P:nw",
              "group": "NW-10cd",
              "teacher": "Gün"
            },
            {
              "id": 419,
              "name": "ETH (ETH10acd)",
              "subject": "ETH",
              "group": "ETH10acd",
              "teacher": null
            },
            {
              "id": 421,
              "name": "DE",
              "subject": "DE",
              "group": null,
              "teacher": "Wil"
            },
            {
              "id": 422,
              "name": "EN",
              "subject": "EN",
              "group": null,
              "teacher": "Din"
            },
            {
              "id": 438,
              "name": "INF (INF10d-1)",
              "subject": "INF",
              "group": "INF10d-1",
              "teacher": "Shu"
            },
            {
              "id": 436,
              "name": "KU",
              "subject": "KU",
              "group": null,
              "teacher": "Kön"
            },
            {
              "id": 425,
              "name": "MA",
              "subject": "MA",
              "group": null,
              "teacher": "Scg"
            },
            {
              "id": 426,
              "name": "BIO",
              "subject": "BIO",
              "group": null,
              "teacher": "HoK"
            },
            {
              "id": 427,
              "name": "CH",
              "subject": "CH",
              "group": null,
              "teacher": "Met"
            },
            {
              "id": 428,
              "name": "PH",
              "subject": "PH",
              "group": null,
              "teacher": "Gla"
            },
            {
              "id": 429,
              "name": "GE",
              "subject": "GE",
              "group": null,
              "teacher": "Pol"
            },
            {
              "id": 430,
              "name": "GRW",
              "subject": "GRW",
              "group": null,
              "teacher": "Mar"
            },
            {
              "id": 431,
              "name": "GEO",
              "subject": "GEO",
              "group": null,
              "teacher": "Mar"
            },
            {
              "id": 437,
              "name": "MU",
              "subject": "MU",
              "group": null,
              "teacher": "Höl"
            },
            {
              "id": 439,
              "name": "INF (INF10d-2)",
              "subject": "INF",
              "group": "INF10d-2",
              "teacher": "Gie"
            },
            {
              "id": 453,
              "name": "Nach",
              "subject": "Nach",
              "group": null,
              "teacher": "n.n."
            },
            {
              "id": 459,
              "name": "LAT (LA-10bd)",
              "subject": "LAT",
              "group": "LA-10bd",
              "teacher": "Kie"
            },
            {
              "id": -1,
              "name": "ETH10acd",
              "subject": "ETH10acd",
              "teacher": null
            },
            {
              "id": -1,
              "name": "FR-10bd",
              "subject": "FR-10bd",
              "teacher": "Kra"
            },
            {
              "id": -1,
              "name": "GW-10d",
              "subject": "GW-10d",
              "teacher": "Küh"
            },
            {
              "id": -1,
              "name": "INF10d-1",
              "subject": "INF10d-1",
              "teacher": "Shu"
            },
            {
              "id": -1,
              "name": "INF10d-2",
              "subject": "INF10d-2",
              "teacher": "Gie"
            },
            {
              "id": -1,
              "name": "LA-10bd",
              "subject": "LA-10bd",
              "teacher": "Kie"
            },
            {
              "id": -1,
              "name": "NW-10cd",
              "subject": "NW-10cd",
              "teacher": "Gün"
            },
            {
              "id": -1,
              "name": "REe-st10",
              "subject": "REe-st10",
              "teacher": "Bru"
            },
            {
              "id": -1,
              "name": "REk-st10",
              "subject": "REk-st10",
              "teacher": "Lüb"
            },
            {
              "id": -1,
              "name": "RU-10bd",
              "subject": "RU-10bd",
              "teacher": "Ste"
            },
            {
              "id": -1,
              "name": "SPm10ad",
              "subject": "SPm10ad",
              "teacher": "Scg"
            },
            {
              "id": -1,
              "name": "SPw10ad",
              "subject": "SPw10ad",
              "teacher": "BoM"
            }
          ],
          "courses": [
            { "subject": "ETH10acd", "teacher": null },
            { "subject": "FR-10bd", "teacher": "Kra" },
            { "subject": "GW-10d", "teacher": "Küh" },
            { "subject": "INF10d-1", "teacher": "Shu" },
            { "subject": "INF10d-2", "teacher": "Gie" },
            { "subject": "LA-10bd", "teacher": "Kie" },
            { "subject": "NW-10cd", "teacher": "Gün" },
            { "subject": "REe-st10", "teacher": "Bru" },
            { "subject": "REk-st10", "teacher": "Lüb" },
            { "subject": "RU-10bd", "teacher": "Ste" },
            { "subject": "SPm10ad", "teacher": "Scg" },
            { "subject": "SPw10ad", "teacher": "BoM" }
          ],
          "lessons": [
            {
              "id": 715,
              "name": "Jazz",
              "subject": "Jazz",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 797,
              "name": "SPOm (SPm10ad)",
              "subject": "SPOm",
              "group": "SPm10ad",
              "teacher": "Scg"
            },
            {
              "id": 366,
              "name": "REe (REe-st10)",
              "subject": "REe",
              "group": "REe-st10",
              "teacher": "Bru"
            },
            {
              "id": 367,
              "name": "REk (REk-st10)",
              "subject": "REk",
              "group": "REk-st10",
              "teacher": "Lüb"
            },
            {
              "id": 375,
              "name": "SPOw (SPw10ad)",
              "subject": "SPOw",
              "group": "SPw10ad",
              "teacher": "BoM"
            },
            {
              "id": 380,
              "name": "FR (FR-10bd)",
              "subject": "FR",
              "group": "FR-10bd",
              "teacher": "Kra"
            },
            {
              "id": 381,
              "name": "RU (RU-10bd)",
              "subject": "RU",
              "group": "RU-10bd",
              "teacher": "Ste"
            },
            {
              "id": 440,
              "name": "P:gw (GW-10d)",
              "subject": "P:gw",
              "group": "GW-10d",
              "teacher": "Küh"
            },
            {
              "id": 420,
              "name": "P:nw (NW-10cd)",
              "subject": "P:nw",
              "group": "NW-10cd",
              "teacher": "Gün"
            },
            {
              "id": 419,
              "name": "ETH (ETH10acd)",
              "subject": "ETH",
              "group": "ETH10acd",
              "teacher": null
            },
            {
              "id": 421,
              "name": "DE",
              "subject": "DE",
              "group": null,
              "teacher": "Wil"
            },
            {
              "id": 422,
              "name": "EN",
              "subject": "EN",
              "group": null,
              "teacher": "Din"
            },
            {
              "id": 438,
              "name": "INF (INF10d-1)",
              "subject": "INF",
              "group": "INF10d-1",
              "teacher": "Shu"
            },
            {
              "id": 436,
              "name": "KU",
              "subject": "KU",
              "group": null,
              "teacher": "Kön"
            },
            {
              "id": 425,
              "name": "MA",
              "subject": "MA",
              "group": null,
              "teacher": "Scg"
            },
            {
              "id": 426,
              "name": "BIO",
              "subject": "BIO",
              "group": null,
              "teacher": "HoK"
            },
            {
              "id": 427,
              "name": "CH",
              "subject": "CH",
              "group": null,
              "teacher": "Met"
            },
            {
              "id": 428,
              "name": "PH",
              "subject": "PH",
              "group": null,
              "teacher": "Gla"
            },
            {
              "id": 429,
              "name": "GE",
              "subject": "GE",
              "group": null,
              "teacher": "Pol"
            },
            {
              "id": 430,
              "name": "GRW",
              "subject": "GRW",
              "group": null,
              "teacher": "Mar"
            },
            {
              "id": 431,
              "name": "GEO",
              "subject": "GEO",
              "group": null,
              "teacher": "Mar"
            },
            {
              "id": 437,
              "name": "MU",
              "subject": "MU",
              "group": null,
              "teacher": "Höl"
            },
            {
              "id": 439,
              "name": "INF (INF10d-2)",
              "subject": "INF",
              "group": "INF10d-2",
              "teacher": "Gie"
            },
            {
              "id": 453,
              "name": "Nach",
              "subject": "Nach",
              "group": null,
              "teacher": "n.n."
            },
            {
              "id": 459,
              "name": "LAT (LA-10bd)",
              "subject": "LAT",
              "group": "LA-10bd",
              "teacher": "Kie"
            }
          ],
          "plannedLessons": [
            {
              "id": 427,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "CH" },
              "teacher": { "changed": false, "value": "Met" },
              "room": { "changed": false, "value": "E2.18" },
              "schoolClass": "10d",
              "info": null
            },
            {
              "id": 427,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "CH" },
              "teacher": { "changed": false, "value": "Met" },
              "room": { "changed": false, "value": "E2.18" },
              "schoolClass": "10d",
              "info": null
            },
            {
              "id": 425,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Scg Scn" },
              "room": { "changed": false, "value": "E1.14" },
              "schoolClass": "10d",
              "info": null
            },
            {
              "id": 426,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "BIO" },
              "teacher": { "changed": false, "value": "HoK" },
              "room": { "changed": false, "value": "E0.18" },
              "schoolClass": "10d",
              "info": null
            },
            {
              "id": 429,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "GE" },
              "teacher": { "changed": false, "value": "Pol" },
              "room": { "changed": false, "value": "M1.05" },
              "schoolClass": "10d",
              "info": null
            },
            {
              "id": 421,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "Wil" },
              "room": { "changed": false, "value": "E1.12" },
              "schoolClass": "10d",
              "info": null
            },
            {
              "id": 459,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "LA-10bd" },
              "teacher": { "changed": false, "value": "Kie" },
              "room": { "changed": false, "value": "E2.14" },
              "schoolClass": "10d",
              "info": null
            }
          ]
        },
        {
          "name": "11 Kl",
          "type": "schoolClass",
          "timetable": [
            {
              "id": 812,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Man"
            },
            {
              "id": 870,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Gra"
            },
            {
              "id": 871,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Gra"
            },
            {
              "id": 874,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Gra"
            }
          ],
          "courses": [],
          "lessons": [
            {
              "id": 812,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Man"
            },
            {
              "id": 870,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Gra"
            },
            {
              "id": 871,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Gra"
            },
            {
              "id": 874,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Gra"
            }
          ],
          "plannedLessons": [
            {
              "id": 871,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "Kla" },
              "teacher": { "changed": false, "value": "Gra" },
              "room": { "changed": false, "value": null },
              "schoolClass": "11 Kl",
              "info": null
            }
          ]
        },
        {
          "name": "11 St",
          "type": "schoolClass",
          "timetable": [
            {
              "id": 818,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Scö"
            },
            {
              "id": 827,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Scö"
            },
            {
              "id": 828,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 832,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 837,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 840,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Scö"
            },
            {
              "id": 881,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Paw"
            }
          ],
          "courses": [],
          "lessons": [
            {
              "id": 818,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Scö"
            },
            {
              "id": 827,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Scö"
            },
            {
              "id": 828,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 832,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 837,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 840,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Scö"
            },
            {
              "id": 881,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Paw"
            }
          ],
          "plannedLessons": [
            {
              "id": 832,
              "order": 9,
              "startTime": "2024-09-02T13:10:00.000Z",
              "endTime": "2024-09-02T13:55:00.000Z",
              "subject": { "changed": false, "value": "Stibi" },
              "teacher": { "changed": false, "value": "Kus" },
              "room": { "changed": false, "value": null },
              "schoolClass": "11 St",
              "info": null
            }
          ]
        },
        {
          "name": "JG11",
          "type": "schoolClass",
          "timetable": [
            {
              "id": 773,
              "name": "ACHM2 (achoM2)",
              "subject": "ACHM2",
              "group": "achoM2",
              "teacher": "Kus"
            },
            {
              "id": 715,
              "name": "Jazz",
              "subject": "Jazz",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 772,
              "name": "ACHJ2 (achoJ2)",
              "subject": "ACHJ2",
              "group": "achoJ2",
              "teacher": "Lie"
            },
            {
              "id": 453,
              "name": "Nach",
              "subject": "Nach",
              "group": null,
              "teacher": "n.n."
            },
            {
              "id": 771,
              "name": "ACHJ1 (achoJ1)",
              "subject": "ACHJ1",
              "group": "achoJ1",
              "teacher": null
            },
            {
              "id": 786,
              "name": "AENS1 (aens1)",
              "subject": "AENS1",
              "group": "aens1",
              "teacher": "Sca"
            },
            {
              "id": 632,
              "name": "MU (MU1)",
              "subject": "MU",
              "group": "MU1",
              "teacher": "Lie"
            },
            {
              "id": 624,
              "name": "DE (de1)",
              "subject": "DE",
              "group": "de1",
              "teacher": "Hän"
            },
            {
              "id": 640,
              "name": "BIO (bio2)",
              "subject": "BIO",
              "group": "bio2",
              "teacher": "HoK"
            },
            {
              "id": 625,
              "name": "DE (de2)",
              "subject": "DE",
              "group": "de2",
              "teacher": "Men"
            },
            {
              "id": 626,
              "name": "MA (ma1)",
              "subject": "MA",
              "group": "ma1",
              "teacher": "Scg"
            },
            {
              "id": 633,
              "name": "CH (ch1)",
              "subject": "CH",
              "group": "ch1",
              "teacher": "Mic"
            },
            {
              "id": 627,
              "name": "MA (ma2)",
              "subject": "MA",
              "group": "ma2",
              "teacher": "Thi"
            },
            {
              "id": 629,
              "name": "BIO (bio3)",
              "subject": "BIO",
              "group": "bio3",
              "teacher": "Met"
            },
            {
              "id": 636,
              "name": "GE (ge2)",
              "subject": "GE",
              "group": "ge2",
              "teacher": "Leh"
            },
            {
              "id": 637,
              "name": "SPO (spo2)",
              "subject": "SPO",
              "group": "spo2",
              "teacher": "Göb"
            },
            {
              "id": 643,
              "name": "GRW (grw2)",
              "subject": "GRW",
              "group": "grw2",
              "teacher": "Ber"
            },
            {
              "id": 653,
              "name": "ALA (ala1)",
              "subject": "ALA",
              "group": "ala1",
              "teacher": "Gra"
            },
            {
              "id": 649,
              "name": "ETH (eth2)",
              "subject": "ETH",
              "group": "eth2",
              "teacher": "Zin"
            },
            {
              "id": 648,
              "name": "MU (mu1)",
              "subject": "MU",
              "group": "mu1",
              "teacher": "Paw"
            },
            {
              "id": 642,
              "name": "BIO (bio1)",
              "subject": "BIO",
              "group": "bio1",
              "teacher": "HoK"
            },
            {
              "id": 603,
              "name": "CH (CH1)",
              "subject": "CH",
              "group": "CH1",
              "teacher": "Das"
            },
            {
              "id": 604,
              "name": "EN (EN1)",
              "subject": "EN",
              "group": "EN1",
              "teacher": "Göb"
            },
            {
              "id": 605,
              "name": "EN (EN2)",
              "subject": "EN",
              "group": "EN2",
              "teacher": "Din"
            },
            {
              "id": 606,
              "name": "GE (GE1)",
              "subject": "GE",
              "group": "GE1",
              "teacher": "Leh"
            },
            {
              "id": 607,
              "name": "PH (PH1)",
              "subject": "PH",
              "group": "PH1",
              "teacher": "Gla"
            },
            {
              "id": 647,
              "name": "KU (ku1)",
              "subject": "KU",
              "group": "ku1",
              "teacher": "Kön"
            },
            {
              "id": 646,
              "name": "GE (ge3)",
              "subject": "GE",
              "group": "ge3",
              "teacher": "Kle"
            },
            {
              "id": 644,
              "name": "PH (ph1)",
              "subject": "PH",
              "group": "ph1",
              "teacher": "Koc"
            },
            {
              "id": 645,
              "name": "ETH (eth1)",
              "subject": "ETH",
              "group": "eth1",
              "teacher": "Zin"
            },
            {
              "id": 639,
              "name": "AST (ast1)",
              "subject": "AST",
              "group": "ast1",
              "teacher": "Koc"
            },
            {
              "id": 638,
              "name": "SPO (spo3)",
              "subject": "SPO",
              "group": "spo3",
              "teacher": "Scg"
            },
            {
              "id": 628,
              "name": "MU (MU1)",
              "subject": "MU",
              "group": "MU1",
              "teacher": "Lie"
            },
            {
              "id": 622,
              "name": "GEO (geo3)",
              "subject": "GEO",
              "group": "geo3",
              "teacher": "Sch"
            },
            {
              "id": 623,
              "name": "KU (ku2)",
              "subject": "KU",
              "group": "ku2",
              "teacher": "Kön"
            },
            {
              "id": 641,
              "name": "GEO (geo2)",
              "subject": "GEO",
              "group": "geo2",
              "teacher": "Lin"
            },
            {
              "id": 635,
              "name": "INF (inf2)",
              "subject": "INF",
              "group": "inf2",
              "teacher": "Gie"
            },
            {
              "id": 652,
              "name": "REk (rek1)",
              "subject": "REk",
              "group": "rek1",
              "teacher": "Lüb"
            },
            {
              "id": 654,
              "name": "GRW (grw1)",
              "subject": "GRW",
              "group": "grw1",
              "teacher": "Kie"
            },
            {
              "id": 655,
              "name": "INF (inf1)",
              "subject": "INF",
              "group": "inf1",
              "teacher": "Shu"
            },
            {
              "id": 608,
              "name": "DE (DE1)",
              "subject": "DE",
              "group": "DE1",
              "teacher": "Len"
            },
            {
              "id": 609,
              "name": "DE (DE2)",
              "subject": "DE",
              "group": "DE2",
              "teacher": "BoI"
            },
            {
              "id": 650,
              "name": "KU (ku3)",
              "subject": "KU",
              "group": "ku3",
              "teacher": "Pol"
            },
            {
              "id": 651,
              "name": "REe (ree1)",
              "subject": "REe",
              "group": "ree1",
              "teacher": "Bru"
            },
            {
              "id": 630,
              "name": "EN (en1)",
              "subject": "EN",
              "group": "en1",
              "teacher": "Göb"
            },
            {
              "id": 631,
              "name": "FR (fr1)",
              "subject": "FR",
              "group": "fr1",
              "teacher": "Ste"
            },
            {
              "id": 634,
              "name": "EN (en2)",
              "subject": "EN",
              "group": "en2",
              "teacher": "Scl"
            },
            {
              "id": 610,
              "name": "MA (MA1)",
              "subject": "MA",
              "group": "MA1",
              "teacher": "Dom"
            },
            {
              "id": 611,
              "name": "MA (MA2)",
              "subject": "MA",
              "group": "MA2",
              "teacher": "Kok"
            },
            {
              "id": 612,
              "name": "GE (ge1)",
              "subject": "GE",
              "group": "ge1",
              "teacher": "Pol"
            },
            {
              "id": 613,
              "name": "GEO (geo1)",
              "subject": "GEO",
              "group": "geo1",
              "teacher": "Lin"
            },
            {
              "id": 614,
              "name": "SPO (spo1)",
              "subject": "SPO",
              "group": "spo1",
              "teacher": "BoM"
            },
            {
              "id": 615,
              "name": "CHJ (choJ)",
              "subject": "CHJ",
              "group": "choJ",
              "teacher": "CHLJ"
            },
            {
              "id": 616,
              "name": "CHM (choM)",
              "subject": "CHM",
              "group": "choM",
              "teacher": "CHLM"
            },
            {
              "id": 617,
              "name": "ENS2 (ens2)",
              "subject": "ENS2",
              "group": "ens2",
              "teacher": "Sca"
            },
            {
              "id": 785,
              "name": "ACHM2 (achoM2)",
              "subject": "ACHM2",
              "group": "achoM2",
              "teacher": "Kus"
            },
            {
              "id": 784,
              "name": "ACHJ2 (achoJ2)",
              "subject": "ACHJ2",
              "group": "achoJ2",
              "teacher": "Lie"
            },
            {
              "id": 621,
              "name": "CH (ch2)",
              "subject": "CH",
              "group": "ch2",
              "teacher": "Bro"
            },
            {
              "id": -1,
              "name": "achoJ1",
              "subject": "achoJ1",
              "teacher": null
            },
            {
              "id": -1,
              "name": "achoJ2",
              "subject": "achoJ2",
              "teacher": "Lie"
            },
            {
              "id": -1,
              "name": "achoM2",
              "subject": "achoM2",
              "teacher": "Kus"
            },
            { "id": -1, "name": "aens1", "subject": "aens1", "teacher": "Sca" },
            { "id": -1, "name": "ala1", "subject": "ala1", "teacher": "Gra" },
            { "id": -1, "name": "ast1", "subject": "ast1", "teacher": "Koc" },
            { "id": -1, "name": "bio1", "subject": "bio1", "teacher": "HoK" },
            { "id": -1, "name": "bio2", "subject": "bio2", "teacher": "HoK" },
            { "id": -1, "name": "bio3", "subject": "bio3", "teacher": "Met" },
            { "id": -1, "name": "CH1", "subject": "CH1", "teacher": "Das" },
            { "id": -1, "name": "ch1", "subject": "ch1", "teacher": "Mic" },
            { "id": -1, "name": "ch2", "subject": "ch2", "teacher": "Bro" },
            { "id": -1, "name": "choJ", "subject": "choJ", "teacher": "CHLJ" },
            { "id": -1, "name": "choM", "subject": "choM", "teacher": "CHLM" },
            { "id": -1, "name": "de1", "subject": "de1", "teacher": "Hän" },
            { "id": -1, "name": "DE1", "subject": "DE1", "teacher": "Len" },
            { "id": -1, "name": "DE2", "subject": "DE2", "teacher": "BoI" },
            { "id": -1, "name": "de2", "subject": "de2", "teacher": "Men" },
            { "id": -1, "name": "en1", "subject": "en1", "teacher": "Göb" },
            { "id": -1, "name": "EN1", "subject": "EN1", "teacher": "Göb" },
            { "id": -1, "name": "EN2", "subject": "EN2", "teacher": "Din" },
            { "id": -1, "name": "en2", "subject": "en2", "teacher": "Scl" },
            { "id": -1, "name": "ens2", "subject": "ens2", "teacher": "Sca" },
            { "id": -1, "name": "eth1", "subject": "eth1", "teacher": "Zin" },
            { "id": -1, "name": "eth2", "subject": "eth2", "teacher": "Zin" },
            { "id": -1, "name": "fr1", "subject": "fr1", "teacher": "Ste" },
            { "id": -1, "name": "GE1", "subject": "GE1", "teacher": "Leh" },
            { "id": -1, "name": "ge1", "subject": "ge1", "teacher": "Pol" },
            { "id": -1, "name": "ge2", "subject": "ge2", "teacher": "Leh" },
            { "id": -1, "name": "ge3", "subject": "ge3", "teacher": "Kle" },
            { "id": -1, "name": "geo1", "subject": "geo1", "teacher": "Lin" },
            { "id": -1, "name": "geo2", "subject": "geo2", "teacher": "Lin" },
            { "id": -1, "name": "geo3", "subject": "geo3", "teacher": "Sch" },
            { "id": -1, "name": "grw1", "subject": "grw1", "teacher": "Kie" },
            { "id": -1, "name": "grw2", "subject": "grw2", "teacher": "Ber" },
            { "id": -1, "name": "inf1", "subject": "inf1", "teacher": "Shu" },
            { "id": -1, "name": "inf2", "subject": "inf2", "teacher": "Gie" },
            { "id": -1, "name": "ku1", "subject": "ku1", "teacher": "Kön" },
            { "id": -1, "name": "ku2", "subject": "ku2", "teacher": "Kön" },
            { "id": -1, "name": "ku3", "subject": "ku3", "teacher": "Pol" },
            { "id": -1, "name": "MA1", "subject": "MA1", "teacher": "Dom" },
            { "id": -1, "name": "ma1", "subject": "ma1", "teacher": "Scg" },
            { "id": -1, "name": "MA2", "subject": "MA2", "teacher": "Kok" },
            { "id": -1, "name": "ma2", "subject": "ma2", "teacher": "Thi" },
            { "id": -1, "name": "MU1", "subject": "MU1", "teacher": "Lie" },
            { "id": -1, "name": "mu1", "subject": "mu1", "teacher": "Paw" },
            { "id": -1, "name": "PH1", "subject": "PH1", "teacher": "Gla" },
            { "id": -1, "name": "ph1", "subject": "ph1", "teacher": "Koc" },
            { "id": -1, "name": "ree1", "subject": "ree1", "teacher": "Bru" },
            { "id": -1, "name": "rek1", "subject": "rek1", "teacher": "Lüb" },
            { "id": -1, "name": "spo1", "subject": "spo1", "teacher": "BoM" },
            { "id": -1, "name": "spo2", "subject": "spo2", "teacher": "Göb" },
            { "id": -1, "name": "spo3", "subject": "spo3", "teacher": "Scg" }
          ],
          "courses": [
            { "subject": "achoJ1", "teacher": null },
            { "subject": "achoJ2", "teacher": "Lie" },
            { "subject": "achoM2", "teacher": "Kus" },
            { "subject": "aens1", "teacher": "Sca" },
            { "subject": "ala1", "teacher": "Gra" },
            { "subject": "ast1", "teacher": "Koc" },
            { "subject": "bio1", "teacher": "HoK" },
            { "subject": "bio2", "teacher": "HoK" },
            { "subject": "bio3", "teacher": "Met" },
            { "subject": "CH1", "teacher": "Das" },
            { "subject": "ch1", "teacher": "Mic" },
            { "subject": "ch2", "teacher": "Bro" },
            { "subject": "choJ", "teacher": "CHLJ" },
            { "subject": "choM", "teacher": "CHLM" },
            { "subject": "de1", "teacher": "Hän" },
            { "subject": "DE1", "teacher": "Len" },
            { "subject": "DE2", "teacher": "BoI" },
            { "subject": "de2", "teacher": "Men" },
            { "subject": "en1", "teacher": "Göb" },
            { "subject": "EN1", "teacher": "Göb" },
            { "subject": "EN2", "teacher": "Din" },
            { "subject": "en2", "teacher": "Scl" },
            { "subject": "ens2", "teacher": "Sca" },
            { "subject": "eth1", "teacher": "Zin" },
            { "subject": "eth2", "teacher": "Zin" },
            { "subject": "fr1", "teacher": "Ste" },
            { "subject": "GE1", "teacher": "Leh" },
            { "subject": "ge1", "teacher": "Pol" },
            { "subject": "ge2", "teacher": "Leh" },
            { "subject": "ge3", "teacher": "Kle" },
            { "subject": "geo1", "teacher": "Lin" },
            { "subject": "geo2", "teacher": "Lin" },
            { "subject": "geo3", "teacher": "Sch" },
            { "subject": "grw1", "teacher": "Kie" },
            { "subject": "grw2", "teacher": "Ber" },
            { "subject": "inf1", "teacher": "Shu" },
            { "subject": "inf2", "teacher": "Gie" },
            { "subject": "ku1", "teacher": "Kön" },
            { "subject": "ku2", "teacher": "Kön" },
            { "subject": "ku3", "teacher": "Pol" },
            { "subject": "MA1", "teacher": "Dom" },
            { "subject": "ma1", "teacher": "Scg" },
            { "subject": "MA2", "teacher": "Kok" },
            { "subject": "ma2", "teacher": "Thi" },
            { "subject": "MU1", "teacher": "Lie" },
            { "subject": "mu1", "teacher": "Paw" },
            { "subject": "PH1", "teacher": "Gla" },
            { "subject": "ph1", "teacher": "Koc" },
            { "subject": "ree1", "teacher": "Bru" },
            { "subject": "rek1", "teacher": "Lüb" },
            { "subject": "spo1", "teacher": "BoM" },
            { "subject": "spo2", "teacher": "Göb" },
            { "subject": "spo3", "teacher": "Scg" }
          ],
          "lessons": [
            {
              "id": 773,
              "name": "ACHM2 (achoM2)",
              "subject": "ACHM2",
              "group": "achoM2",
              "teacher": "Kus"
            },
            {
              "id": 715,
              "name": "Jazz",
              "subject": "Jazz",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 772,
              "name": "ACHJ2 (achoJ2)",
              "subject": "ACHJ2",
              "group": "achoJ2",
              "teacher": "Lie"
            },
            {
              "id": 453,
              "name": "Nach",
              "subject": "Nach",
              "group": null,
              "teacher": "n.n."
            },
            {
              "id": 771,
              "name": "ACHJ1 (achoJ1)",
              "subject": "ACHJ1",
              "group": "achoJ1",
              "teacher": null
            },
            {
              "id": 786,
              "name": "AENS1 (aens1)",
              "subject": "AENS1",
              "group": "aens1",
              "teacher": "Sca"
            },
            {
              "id": 632,
              "name": "MU (MU1)",
              "subject": "MU",
              "group": "MU1",
              "teacher": "Lie"
            },
            {
              "id": 624,
              "name": "DE (de1)",
              "subject": "DE",
              "group": "de1",
              "teacher": "Hän"
            },
            {
              "id": 640,
              "name": "BIO (bio2)",
              "subject": "BIO",
              "group": "bio2",
              "teacher": "HoK"
            },
            {
              "id": 625,
              "name": "DE (de2)",
              "subject": "DE",
              "group": "de2",
              "teacher": "Men"
            },
            {
              "id": 626,
              "name": "MA (ma1)",
              "subject": "MA",
              "group": "ma1",
              "teacher": "Scg"
            },
            {
              "id": 633,
              "name": "CH (ch1)",
              "subject": "CH",
              "group": "ch1",
              "teacher": "Mic"
            },
            {
              "id": 627,
              "name": "MA (ma2)",
              "subject": "MA",
              "group": "ma2",
              "teacher": "Thi"
            },
            {
              "id": 629,
              "name": "BIO (bio3)",
              "subject": "BIO",
              "group": "bio3",
              "teacher": "Met"
            },
            {
              "id": 636,
              "name": "GE (ge2)",
              "subject": "GE",
              "group": "ge2",
              "teacher": "Leh"
            },
            {
              "id": 637,
              "name": "SPO (spo2)",
              "subject": "SPO",
              "group": "spo2",
              "teacher": "Göb"
            },
            {
              "id": 643,
              "name": "GRW (grw2)",
              "subject": "GRW",
              "group": "grw2",
              "teacher": "Ber"
            },
            {
              "id": 653,
              "name": "ALA (ala1)",
              "subject": "ALA",
              "group": "ala1",
              "teacher": "Gra"
            },
            {
              "id": 649,
              "name": "ETH (eth2)",
              "subject": "ETH",
              "group": "eth2",
              "teacher": "Zin"
            },
            {
              "id": 648,
              "name": "MU (mu1)",
              "subject": "MU",
              "group": "mu1",
              "teacher": "Paw"
            },
            {
              "id": 642,
              "name": "BIO (bio1)",
              "subject": "BIO",
              "group": "bio1",
              "teacher": "HoK"
            },
            {
              "id": 603,
              "name": "CH (CH1)",
              "subject": "CH",
              "group": "CH1",
              "teacher": "Das"
            },
            {
              "id": 604,
              "name": "EN (EN1)",
              "subject": "EN",
              "group": "EN1",
              "teacher": "Göb"
            },
            {
              "id": 605,
              "name": "EN (EN2)",
              "subject": "EN",
              "group": "EN2",
              "teacher": "Din"
            },
            {
              "id": 606,
              "name": "GE (GE1)",
              "subject": "GE",
              "group": "GE1",
              "teacher": "Leh"
            },
            {
              "id": 607,
              "name": "PH (PH1)",
              "subject": "PH",
              "group": "PH1",
              "teacher": "Gla"
            },
            {
              "id": 647,
              "name": "KU (ku1)",
              "subject": "KU",
              "group": "ku1",
              "teacher": "Kön"
            },
            {
              "id": 646,
              "name": "GE (ge3)",
              "subject": "GE",
              "group": "ge3",
              "teacher": "Kle"
            },
            {
              "id": 644,
              "name": "PH (ph1)",
              "subject": "PH",
              "group": "ph1",
              "teacher": "Koc"
            },
            {
              "id": 645,
              "name": "ETH (eth1)",
              "subject": "ETH",
              "group": "eth1",
              "teacher": "Zin"
            },
            {
              "id": 639,
              "name": "AST (ast1)",
              "subject": "AST",
              "group": "ast1",
              "teacher": "Koc"
            },
            {
              "id": 638,
              "name": "SPO (spo3)",
              "subject": "SPO",
              "group": "spo3",
              "teacher": "Scg"
            },
            {
              "id": 628,
              "name": "MU (MU1)",
              "subject": "MU",
              "group": "MU1",
              "teacher": "Lie"
            },
            {
              "id": 622,
              "name": "GEO (geo3)",
              "subject": "GEO",
              "group": "geo3",
              "teacher": "Sch"
            },
            {
              "id": 623,
              "name": "KU (ku2)",
              "subject": "KU",
              "group": "ku2",
              "teacher": "Kön"
            },
            {
              "id": 641,
              "name": "GEO (geo2)",
              "subject": "GEO",
              "group": "geo2",
              "teacher": "Lin"
            },
            {
              "id": 635,
              "name": "INF (inf2)",
              "subject": "INF",
              "group": "inf2",
              "teacher": "Gie"
            },
            {
              "id": 652,
              "name": "REk (rek1)",
              "subject": "REk",
              "group": "rek1",
              "teacher": "Lüb"
            },
            {
              "id": 654,
              "name": "GRW (grw1)",
              "subject": "GRW",
              "group": "grw1",
              "teacher": "Kie"
            },
            {
              "id": 655,
              "name": "INF (inf1)",
              "subject": "INF",
              "group": "inf1",
              "teacher": "Shu"
            },
            {
              "id": 608,
              "name": "DE (DE1)",
              "subject": "DE",
              "group": "DE1",
              "teacher": "Len"
            },
            {
              "id": 609,
              "name": "DE (DE2)",
              "subject": "DE",
              "group": "DE2",
              "teacher": "BoI"
            },
            {
              "id": 650,
              "name": "KU (ku3)",
              "subject": "KU",
              "group": "ku3",
              "teacher": "Pol"
            },
            {
              "id": 651,
              "name": "REe (ree1)",
              "subject": "REe",
              "group": "ree1",
              "teacher": "Bru"
            },
            {
              "id": 630,
              "name": "EN (en1)",
              "subject": "EN",
              "group": "en1",
              "teacher": "Göb"
            },
            {
              "id": 631,
              "name": "FR (fr1)",
              "subject": "FR",
              "group": "fr1",
              "teacher": "Ste"
            },
            {
              "id": 634,
              "name": "EN (en2)",
              "subject": "EN",
              "group": "en2",
              "teacher": "Scl"
            },
            {
              "id": 610,
              "name": "MA (MA1)",
              "subject": "MA",
              "group": "MA1",
              "teacher": "Dom"
            },
            {
              "id": 611,
              "name": "MA (MA2)",
              "subject": "MA",
              "group": "MA2",
              "teacher": "Kok"
            },
            {
              "id": 612,
              "name": "GE (ge1)",
              "subject": "GE",
              "group": "ge1",
              "teacher": "Pol"
            },
            {
              "id": 613,
              "name": "GEO (geo1)",
              "subject": "GEO",
              "group": "geo1",
              "teacher": "Lin"
            },
            {
              "id": 614,
              "name": "SPO (spo1)",
              "subject": "SPO",
              "group": "spo1",
              "teacher": "BoM"
            },
            {
              "id": 615,
              "name": "CHJ (choJ)",
              "subject": "CHJ",
              "group": "choJ",
              "teacher": "CHLJ"
            },
            {
              "id": 616,
              "name": "CHM (choM)",
              "subject": "CHM",
              "group": "choM",
              "teacher": "CHLM"
            },
            {
              "id": 617,
              "name": "ENS2 (ens2)",
              "subject": "ENS2",
              "group": "ens2",
              "teacher": "Sca"
            },
            {
              "id": 785,
              "name": "ACHM2 (achoM2)",
              "subject": "ACHM2",
              "group": "achoM2",
              "teacher": "Kus"
            },
            {
              "id": 784,
              "name": "ACHJ2 (achoJ2)",
              "subject": "ACHJ2",
              "group": "achoJ2",
              "teacher": "Lie"
            },
            {
              "id": 621,
              "name": "CH (ch2)",
              "subject": "CH",
              "group": "ch2",
              "teacher": "Bro"
            }
          ],
          "plannedLessons": [
            {
              "id": 631,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "fr1" },
              "teacher": { "changed": false, "value": "Ste" },
              "room": { "changed": false, "value": "E1.13" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 639,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "ast1" },
              "teacher": { "changed": false, "value": "Koc" },
              "room": { "changed": false, "value": "S2.12" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 640,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "bio2" },
              "teacher": { "changed": false, "value": "HoK" },
              "room": { "changed": false, "value": "E0.18" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 641,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "geo2" },
              "teacher": { "changed": true, "value": "Anon" },
              "room": { "changed": false, "value": "E0.12" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 639,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "ast1" },
              "teacher": { "changed": false, "value": "Koc" },
              "room": { "changed": false, "value": "S2.12" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 640,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "bio2" },
              "teacher": { "changed": false, "value": "HoK" },
              "room": { "changed": false, "value": "E0.18" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 641,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "geo2" },
              "teacher": { "changed": false, "value": "Lin" },
              "room": { "changed": false, "value": "E0.12" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 603,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "CH1" },
              "teacher": { "changed": false, "value": "Das" },
              "room": { "changed": false, "value": "E2.18" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 604,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "EN1" },
              "teacher": { "changed": false, "value": "Göb" },
              "room": { "changed": false, "value": "E2.08" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 605,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "EN2" },
              "teacher": { "changed": false, "value": "Din" },
              "room": { "changed": false, "value": "E2.12" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 606,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "GE1" },
              "teacher": { "changed": false, "value": "Leh" },
              "room": { "changed": false, "value": "E1.14" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 607,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "PH1" },
              "teacher": { "changed": false, "value": "Gla" },
              "room": { "changed": false, "value": "E1.18" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 624,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "de1" },
              "teacher": { "changed": false, "value": "Hän" },
              "room": { "changed": false, "value": "E1.14" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 625,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "de2" },
              "teacher": { "changed": false, "value": "Men" },
              "room": { "changed": false, "value": "E2.15" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 626,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "ma1" },
              "teacher": { "changed": false, "value": "Scg Scn" },
              "room": { "changed": false, "value": "S1.13" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 627,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "ma2" },
              "teacher": { "changed": false, "value": "Thi" },
              "room": { "changed": false, "value": "S1.14" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 624,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "de1" },
              "teacher": { "changed": false, "value": "Hän" },
              "room": { "changed": false, "value": "E1.14" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 625,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "de2" },
              "teacher": { "changed": false, "value": "Men" },
              "room": { "changed": false, "value": "E2.15" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 626,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "ma1" },
              "teacher": { "changed": false, "value": "Scg Scn" },
              "room": { "changed": false, "value": "S1.13" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 627,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "ma2" },
              "teacher": { "changed": false, "value": "Thi" },
              "room": { "changed": false, "value": "S1.14" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 615,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "choJ" },
              "teacher": { "changed": false, "value": "CHLJ Scö" },
              "room": { "changed": false, "value": null },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 616,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "choM" },
              "teacher": { "changed": false, "value": "CHLM Paw" },
              "room": { "changed": false, "value": "S2.17" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 617,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "ens2" },
              "teacher": { "changed": false, "value": "Sca" },
              "room": { "changed": false, "value": "A0.09" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 615,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "choJ" },
              "teacher": { "changed": false, "value": "CHLJ Scö" },
              "room": { "changed": false, "value": null },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 616,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "choM" },
              "teacher": { "changed": false, "value": "CHLM Paw" },
              "room": { "changed": false, "value": "S2.17" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 617,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "ens2" },
              "teacher": { "changed": false, "value": "Sca" },
              "room": { "changed": false, "value": "A0.09" },
              "schoolClass": "JG11",
              "info": null
            }
          ]
        },
        {
          "name": "12 Kl",
          "type": "schoolClass",
          "timetable": [
            {
              "id": 884,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Lie"
            },
            {
              "id": 813,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Man"
            },
            {
              "id": 851,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Lie"
            },
            {
              "id": 864,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Lie"
            },
            {
              "id": 872,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Gra"
            },
            {
              "id": 873,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Gra"
            },
            {
              "id": 874,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Gra"
            }
          ],
          "courses": [],
          "lessons": [
            {
              "id": 884,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Lie"
            },
            {
              "id": 813,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Man"
            },
            {
              "id": 851,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Lie"
            },
            {
              "id": 864,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Lie"
            },
            {
              "id": 872,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Gra"
            },
            {
              "id": 873,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Gra"
            },
            {
              "id": 874,
              "name": "Kla",
              "subject": "Kla",
              "group": null,
              "teacher": "Gra"
            }
          ],
          "plannedLessons": [
            {
              "id": 872,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kla" },
              "teacher": { "changed": false, "value": "Gra" },
              "room": { "changed": false, "value": null },
              "schoolClass": "12 Kl",
              "info": null
            }
          ]
        },
        {
          "name": "12 St",
          "type": "schoolClass",
          "timetable": [
            {
              "id": 816,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 819,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 821,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 822,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 823,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 824,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 825,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 826,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Scö"
            },
            {
              "id": 827,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Scö"
            },
            {
              "id": 828,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 829,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Scö"
            },
            {
              "id": 830,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Scö"
            },
            {
              "id": 831,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Scö"
            },
            {
              "id": 833,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 834,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Scö"
            },
            {
              "id": 839,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Scö"
            },
            {
              "id": 882,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Scö"
            }
          ],
          "courses": [],
          "lessons": [
            {
              "id": 816,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 819,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 821,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 822,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 823,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 824,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 825,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 826,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Scö"
            },
            {
              "id": 827,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Scö"
            },
            {
              "id": 828,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 829,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Scö"
            },
            {
              "id": 830,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Scö"
            },
            {
              "id": 831,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Scö"
            },
            {
              "id": 833,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Kus"
            },
            {
              "id": 834,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Scö"
            },
            {
              "id": 839,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Scö"
            },
            {
              "id": 882,
              "name": "Stibi",
              "subject": "Stibi",
              "group": null,
              "teacher": "Scö"
            }
          ],
          "plannedLessons": [
            {
              "id": 821,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "Stibi" },
              "teacher": { "changed": false, "value": "Kus" },
              "room": { "changed": false, "value": null },
              "schoolClass": "12 St",
              "info": null
            },
            {
              "id": 829,
              "order": 9,
              "startTime": "2024-09-02T13:10:00.000Z",
              "endTime": "2024-09-02T13:55:00.000Z",
              "subject": { "changed": false, "value": "Stibi" },
              "teacher": { "changed": false, "value": "Scö" },
              "room": { "changed": false, "value": null },
              "schoolClass": "12 St",
              "info": null
            }
          ]
        },
        {
          "name": "JG12",
          "type": "schoolClass",
          "timetable": [
            {
              "id": 775,
              "name": "GEO (geo2)",
              "subject": "GEO",
              "group": "geo2",
              "teacher": "Küh"
            },
            {
              "id": 773,
              "name": "ACHM2 (achoM2)",
              "subject": "ACHM2",
              "group": "achoM2",
              "teacher": "Kus"
            },
            {
              "id": 715,
              "name": "Jazz",
              "subject": "Jazz",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 772,
              "name": "ACHJ2 (achoJ2)",
              "subject": "ACHJ2",
              "group": "achoJ2",
              "teacher": "Lie"
            },
            {
              "id": 769,
              "name": "GEO (geo3)",
              "subject": "GEO",
              "group": "geo3",
              "teacher": "Kön"
            },
            {
              "id": 777,
              "name": "SPO (spo2)",
              "subject": "SPO",
              "group": "spo2",
              "teacher": "BoM"
            },
            {
              "id": 766,
              "name": "INF (inf2)",
              "subject": "INF",
              "group": "inf2",
              "teacher": "Gie"
            },
            {
              "id": 761,
              "name": "GE (ge1)",
              "subject": "GE",
              "group": "ge1",
              "teacher": "Kie"
            },
            {
              "id": 765,
              "name": "BIO (bio3)",
              "subject": "BIO",
              "group": "bio3",
              "teacher": "Met"
            },
            {
              "id": 779,
              "name": "EN (en2)",
              "subject": "EN",
              "group": "en2",
              "teacher": "Scl"
            },
            {
              "id": 783,
              "name": "ETH (eth1)",
              "subject": "ETH",
              "group": "eth1",
              "teacher": "Zin"
            },
            {
              "id": 763,
              "name": "GRW (grw1)",
              "subject": "GRW",
              "group": "grw1",
              "teacher": "Ber"
            },
            {
              "id": 780,
              "name": "FR (fr1)",
              "subject": "FR",
              "group": "fr1",
              "teacher": "Kra"
            },
            {
              "id": 764,
              "name": "KU (ku3)",
              "subject": "KU",
              "group": "ku3",
              "teacher": "Pol"
            },
            {
              "id": 453,
              "name": "Nach",
              "subject": "Nach",
              "group": null,
              "teacher": "n.n."
            },
            {
              "id": 776,
              "name": "KU (ku2)",
              "subject": "KU",
              "group": "ku2",
              "teacher": "Pol"
            },
            {
              "id": 774,
              "name": "FR (fr1)",
              "subject": "FR",
              "group": "fr1",
              "teacher": "Kra"
            },
            {
              "id": 771,
              "name": "ACHJ1 (achoJ1)",
              "subject": "ACHJ1",
              "group": "achoJ1",
              "teacher": null
            },
            {
              "id": 770,
              "name": "SPO (spo1)",
              "subject": "SPO",
              "group": "spo1",
              "teacher": "BoM"
            },
            {
              "id": 768,
              "name": "GE (ge2)",
              "subject": "GE",
              "group": "ge2",
              "teacher": "Kle"
            },
            {
              "id": 767,
              "name": "PH (ph1)",
              "subject": "PH",
              "group": "ph1",
              "teacher": "Kok"
            },
            {
              "id": 782,
              "name": "EN (en3)",
              "subject": "EN",
              "group": "en3",
              "teacher": "Sei"
            },
            {
              "id": 786,
              "name": "AENS1 (aens1)",
              "subject": "AENS1",
              "group": "aens1",
              "teacher": "Sca"
            },
            {
              "id": 653,
              "name": "ALA (ala1)",
              "subject": "ALA",
              "group": "ala1",
              "teacher": "Gra"
            },
            {
              "id": 615,
              "name": "CHJ (choJ)",
              "subject": "CHJ",
              "group": "choJ",
              "teacher": "CHLJ"
            },
            {
              "id": 616,
              "name": "CHM (choM)",
              "subject": "CHM",
              "group": "choM",
              "teacher": "CHLM"
            },
            {
              "id": 785,
              "name": "ACHM2 (achoM2)",
              "subject": "ACHM2",
              "group": "achoM2",
              "teacher": "Kus"
            },
            {
              "id": 784,
              "name": "ACHJ2 (achoJ2)",
              "subject": "ACHJ2",
              "group": "achoJ2",
              "teacher": "Lie"
            },
            {
              "id": 778,
              "name": "CH (ch1)",
              "subject": "CH",
              "group": "ch1",
              "teacher": "Mic"
            },
            {
              "id": 728,
              "name": "DE (DE1)",
              "subject": "DE",
              "group": "DE1",
              "teacher": "Höl"
            },
            {
              "id": 729,
              "name": "DE (DE3)",
              "subject": "DE",
              "group": "DE3",
              "teacher": "Pau"
            },
            {
              "id": 730,
              "name": "MA (MA1)",
              "subject": "MA",
              "group": "MA1",
              "teacher": "Dom"
            },
            {
              "id": 731,
              "name": "MA (MA2)",
              "subject": "MA",
              "group": "MA2",
              "teacher": "Sch"
            },
            {
              "id": 732,
              "name": "CH (CH1)",
              "subject": "CH",
              "group": "CH1",
              "teacher": "Das"
            },
            {
              "id": 733,
              "name": "EN (EN2)",
              "subject": "EN",
              "group": "EN2",
              "teacher": "Wil"
            },
            {
              "id": 734,
              "name": "GE (GE1)",
              "subject": "GE",
              "group": "GE1",
              "teacher": "Pol"
            },
            {
              "id": 735,
              "name": "GE (GE2)",
              "subject": "GE",
              "group": "GE2",
              "teacher": "SeC"
            },
            {
              "id": 736,
              "name": "PH (PH1)",
              "subject": "PH",
              "group": "PH1",
              "teacher": "Gün"
            },
            {
              "id": 738,
              "name": "DE (de1)",
              "subject": "DE",
              "group": "de1",
              "teacher": "Hän"
            },
            {
              "id": 739,
              "name": "DE (de2)",
              "subject": "DE",
              "group": "de2",
              "teacher": "Men"
            },
            {
              "id": 740,
              "name": "MA (ma1)",
              "subject": "MA",
              "group": "ma1",
              "teacher": "Gie"
            },
            {
              "id": 741,
              "name": "MA (ma2)",
              "subject": "MA",
              "group": "ma2",
              "teacher": "Vet"
            },
            {
              "id": 742,
              "name": "MU (MU1)",
              "subject": "MU",
              "group": "MU1",
              "teacher": "Sca"
            },
            {
              "id": 743,
              "name": "BIO (bio1)",
              "subject": "BIO",
              "group": "bio1",
              "teacher": "Bro"
            },
            {
              "id": 744,
              "name": "GEO (geo1)",
              "subject": "GEO",
              "group": "geo1",
              "teacher": "Küh"
            },
            {
              "id": 745,
              "name": "INF (inf1)",
              "subject": "INF",
              "group": "inf1",
              "teacher": "Shu"
            },
            {
              "id": 746,
              "name": "ETH (eth2)",
              "subject": "ETH",
              "group": "eth2",
              "teacher": "Zin"
            },
            {
              "id": 747,
              "name": "REe (ree1)",
              "subject": "REe",
              "group": "ree1",
              "teacher": "Bru"
            },
            {
              "id": 748,
              "name": "REk (rek1)",
              "subject": "REk",
              "group": "rek1",
              "teacher": "SeC"
            },
            {
              "id": 749,
              "name": "CH (ch2)",
              "subject": "CH",
              "group": "ch2",
              "teacher": "Bro"
            },
            {
              "id": 750,
              "name": "PH (ph2)",
              "subject": "PH",
              "group": "ph2",
              "teacher": "Koc"
            },
            {
              "id": 751,
              "name": "MU (MU1)",
              "subject": "MU",
              "group": "MU1",
              "teacher": "Sca"
            },
            {
              "id": 752,
              "name": "AST (ast1)",
              "subject": "AST",
              "group": "ast1",
              "teacher": "Koc"
            },
            {
              "id": 753,
              "name": "BIO (bio2)",
              "subject": "BIO",
              "group": "bio2",
              "teacher": "Bro"
            },
            {
              "id": 754,
              "name": "CHJ (choJ)",
              "subject": "CHJ",
              "group": "choJ",
              "teacher": "Lie"
            },
            {
              "id": 755,
              "name": "CHM (choM)",
              "subject": "CHM",
              "group": "choM",
              "teacher": "Kus"
            },
            {
              "id": 756,
              "name": "MU (mu1)",
              "subject": "MU",
              "group": "mu1",
              "teacher": "Höl"
            },
            {
              "id": 757,
              "name": "GRW (grw2)",
              "subject": "GRW",
              "group": "grw2",
              "teacher": "Len"
            },
            {
              "id": 758,
              "name": "KU (ku1)",
              "subject": "KU",
              "group": "ku1",
              "teacher": "Kön"
            },
            {
              "id": 759,
              "name": "SPO (spo3)",
              "subject": "SPO",
              "group": "spo3",
              "teacher": "Mel"
            },
            {
              "id": -1,
              "name": "achoJ1",
              "subject": "achoJ1",
              "teacher": null
            },
            {
              "id": -1,
              "name": "achoJ2",
              "subject": "achoJ2",
              "teacher": "Lie"
            },
            {
              "id": -1,
              "name": "achoM2",
              "subject": "achoM2",
              "teacher": "Kus"
            },
            { "id": -1, "name": "aens1", "subject": "aens1", "teacher": "Sca" },
            { "id": -1, "name": "ala1", "subject": "ala1", "teacher": "Gra" },
            { "id": -1, "name": "ast1", "subject": "ast1", "teacher": "Koc" },
            { "id": -1, "name": "bio1", "subject": "bio1", "teacher": "Bro" },
            { "id": -1, "name": "bio2", "subject": "bio2", "teacher": "Bro" },
            { "id": -1, "name": "bio3", "subject": "bio3", "teacher": "Met" },
            { "id": -1, "name": "CH1", "subject": "CH1", "teacher": "Das" },
            { "id": -1, "name": "ch1", "subject": "ch1", "teacher": "Mic" },
            { "id": -1, "name": "ch2", "subject": "ch2", "teacher": "Bro" },
            { "id": -1, "name": "choJ", "subject": "choJ", "teacher": "CHLJ" },
            { "id": -1, "name": "choJ", "subject": "choJ", "teacher": "Lie" },
            { "id": -1, "name": "choM", "subject": "choM", "teacher": "CHLM" },
            { "id": -1, "name": "choM", "subject": "choM", "teacher": "Kus" },
            { "id": -1, "name": "de1", "subject": "de1", "teacher": "Hän" },
            { "id": -1, "name": "DE1", "subject": "DE1", "teacher": "Höl" },
            { "id": -1, "name": "de2", "subject": "de2", "teacher": "Men" },
            { "id": -1, "name": "DE3", "subject": "DE3", "teacher": "Pau" },
            { "id": -1, "name": "en2", "subject": "en2", "teacher": "Scl" },
            { "id": -1, "name": "EN2", "subject": "EN2", "teacher": "Wil" },
            { "id": -1, "name": "en3", "subject": "en3", "teacher": "Sei" },
            { "id": -1, "name": "eth1", "subject": "eth1", "teacher": "Zin" },
            { "id": -1, "name": "eth2", "subject": "eth2", "teacher": "Zin" },
            { "id": -1, "name": "fr1", "subject": "fr1", "teacher": "Kra" },
            { "id": -1, "name": "ge1", "subject": "ge1", "teacher": "Kie" },
            { "id": -1, "name": "GE1", "subject": "GE1", "teacher": "Pol" },
            { "id": -1, "name": "ge2", "subject": "ge2", "teacher": "Kle" },
            { "id": -1, "name": "GE2", "subject": "GE2", "teacher": "SeC" },
            { "id": -1, "name": "geo1", "subject": "geo1", "teacher": "Küh" },
            { "id": -1, "name": "geo2", "subject": "geo2", "teacher": "Küh" },
            { "id": -1, "name": "geo3", "subject": "geo3", "teacher": "Kön" },
            { "id": -1, "name": "grw1", "subject": "grw1", "teacher": "Ber" },
            { "id": -1, "name": "grw2", "subject": "grw2", "teacher": "Len" },
            { "id": -1, "name": "inf1", "subject": "inf1", "teacher": "Shu" },
            { "id": -1, "name": "inf2", "subject": "inf2", "teacher": "Gie" },
            { "id": -1, "name": "ku1", "subject": "ku1", "teacher": "Kön" },
            { "id": -1, "name": "ku2", "subject": "ku2", "teacher": "Pol" },
            { "id": -1, "name": "ku3", "subject": "ku3", "teacher": "Pol" },
            { "id": -1, "name": "MA1", "subject": "MA1", "teacher": "Dom" },
            { "id": -1, "name": "ma1", "subject": "ma1", "teacher": "Gie" },
            { "id": -1, "name": "MA2", "subject": "MA2", "teacher": "Sch" },
            { "id": -1, "name": "ma2", "subject": "ma2", "teacher": "Vet" },
            { "id": -1, "name": "mu1", "subject": "mu1", "teacher": "Höl" },
            { "id": -1, "name": "MU1", "subject": "MU1", "teacher": "Sca" },
            { "id": -1, "name": "PH1", "subject": "PH1", "teacher": "Gün" },
            { "id": -1, "name": "ph1", "subject": "ph1", "teacher": "Kok" },
            { "id": -1, "name": "ph2", "subject": "ph2", "teacher": "Koc" },
            { "id": -1, "name": "ree1", "subject": "ree1", "teacher": "Bru" },
            { "id": -1, "name": "rek1", "subject": "rek1", "teacher": "SeC" },
            { "id": -1, "name": "spo1", "subject": "spo1", "teacher": "BoM" },
            { "id": -1, "name": "spo2", "subject": "spo2", "teacher": "BoM" },
            { "id": -1, "name": "spo3", "subject": "spo3", "teacher": "Mel" }
          ],
          "courses": [
            { "subject": "achoJ1", "teacher": null },
            { "subject": "achoJ2", "teacher": "Lie" },
            { "subject": "achoM2", "teacher": "Kus" },
            { "subject": "aens1", "teacher": "Sca" },
            { "subject": "ala1", "teacher": "Gra" },
            { "subject": "ast1", "teacher": "Koc" },
            { "subject": "bio1", "teacher": "Bro" },
            { "subject": "bio2", "teacher": "Bro" },
            { "subject": "bio3", "teacher": "Met" },
            { "subject": "CH1", "teacher": "Das" },
            { "subject": "ch1", "teacher": "Mic" },
            { "subject": "ch2", "teacher": "Bro" },
            { "subject": "choJ", "teacher": "CHLJ" },
            { "subject": "choJ", "teacher": "Lie" },
            { "subject": "choM", "teacher": "CHLM" },
            { "subject": "choM", "teacher": "Kus" },
            { "subject": "de1", "teacher": "Hän" },
            { "subject": "DE1", "teacher": "Höl" },
            { "subject": "de2", "teacher": "Men" },
            { "subject": "DE3", "teacher": "Pau" },
            { "subject": "en2", "teacher": "Scl" },
            { "subject": "EN2", "teacher": "Wil" },
            { "subject": "en3", "teacher": "Sei" },
            { "subject": "eth1", "teacher": "Zin" },
            { "subject": "eth2", "teacher": "Zin" },
            { "subject": "fr1", "teacher": "Kra" },
            { "subject": "ge1", "teacher": "Kie" },
            { "subject": "GE1", "teacher": "Pol" },
            { "subject": "ge2", "teacher": "Kle" },
            { "subject": "GE2", "teacher": "SeC" },
            { "subject": "geo1", "teacher": "Küh" },
            { "subject": "geo2", "teacher": "Küh" },
            { "subject": "geo3", "teacher": "Kön" },
            { "subject": "grw1", "teacher": "Ber" },
            { "subject": "grw2", "teacher": "Len" },
            { "subject": "inf1", "teacher": "Shu" },
            { "subject": "inf2", "teacher": "Gie" },
            { "subject": "ku1", "teacher": "Kön" },
            { "subject": "ku2", "teacher": "Pol" },
            { "subject": "ku3", "teacher": "Pol" },
            { "subject": "MA1", "teacher": "Dom" },
            { "subject": "ma1", "teacher": "Gie" },
            { "subject": "MA2", "teacher": "Sch" },
            { "subject": "ma2", "teacher": "Vet" },
            { "subject": "mu1", "teacher": "Höl" },
            { "subject": "MU1", "teacher": "Sca" },
            { "subject": "PH1", "teacher": "Gün" },
            { "subject": "ph1", "teacher": "Kok" },
            { "subject": "ph2", "teacher": "Koc" },
            { "subject": "ree1", "teacher": "Bru" },
            { "subject": "rek1", "teacher": "SeC" },
            { "subject": "spo1", "teacher": "BoM" },
            { "subject": "spo2", "teacher": "BoM" },
            { "subject": "spo3", "teacher": "Mel" }
          ],
          "lessons": [
            {
              "id": 775,
              "name": "GEO (geo2)",
              "subject": "GEO",
              "group": "geo2",
              "teacher": "Küh"
            },
            {
              "id": 773,
              "name": "ACHM2 (achoM2)",
              "subject": "ACHM2",
              "group": "achoM2",
              "teacher": "Kus"
            },
            {
              "id": 715,
              "name": "Jazz",
              "subject": "Jazz",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 772,
              "name": "ACHJ2 (achoJ2)",
              "subject": "ACHJ2",
              "group": "achoJ2",
              "teacher": "Lie"
            },
            {
              "id": 769,
              "name": "GEO (geo3)",
              "subject": "GEO",
              "group": "geo3",
              "teacher": "Kön"
            },
            {
              "id": 777,
              "name": "SPO (spo2)",
              "subject": "SPO",
              "group": "spo2",
              "teacher": "BoM"
            },
            {
              "id": 766,
              "name": "INF (inf2)",
              "subject": "INF",
              "group": "inf2",
              "teacher": "Gie"
            },
            {
              "id": 761,
              "name": "GE (ge1)",
              "subject": "GE",
              "group": "ge1",
              "teacher": "Kie"
            },
            {
              "id": 765,
              "name": "BIO (bio3)",
              "subject": "BIO",
              "group": "bio3",
              "teacher": "Met"
            },
            {
              "id": 779,
              "name": "EN (en2)",
              "subject": "EN",
              "group": "en2",
              "teacher": "Scl"
            },
            {
              "id": 783,
              "name": "ETH (eth1)",
              "subject": "ETH",
              "group": "eth1",
              "teacher": "Zin"
            },
            {
              "id": 763,
              "name": "GRW (grw1)",
              "subject": "GRW",
              "group": "grw1",
              "teacher": "Ber"
            },
            {
              "id": 780,
              "name": "FR (fr1)",
              "subject": "FR",
              "group": "fr1",
              "teacher": "Kra"
            },
            {
              "id": 764,
              "name": "KU (ku3)",
              "subject": "KU",
              "group": "ku3",
              "teacher": "Pol"
            },
            {
              "id": 453,
              "name": "Nach",
              "subject": "Nach",
              "group": null,
              "teacher": "n.n."
            },
            {
              "id": 776,
              "name": "KU (ku2)",
              "subject": "KU",
              "group": "ku2",
              "teacher": "Pol"
            },
            {
              "id": 774,
              "name": "FR (fr1)",
              "subject": "FR",
              "group": "fr1",
              "teacher": "Kra"
            },
            {
              "id": 771,
              "name": "ACHJ1 (achoJ1)",
              "subject": "ACHJ1",
              "group": "achoJ1",
              "teacher": null
            },
            {
              "id": 770,
              "name": "SPO (spo1)",
              "subject": "SPO",
              "group": "spo1",
              "teacher": "BoM"
            },
            {
              "id": 768,
              "name": "GE (ge2)",
              "subject": "GE",
              "group": "ge2",
              "teacher": "Kle"
            },
            {
              "id": 767,
              "name": "PH (ph1)",
              "subject": "PH",
              "group": "ph1",
              "teacher": "Kok"
            },
            {
              "id": 782,
              "name": "EN (en3)",
              "subject": "EN",
              "group": "en3",
              "teacher": "Sei"
            },
            {
              "id": 786,
              "name": "AENS1 (aens1)",
              "subject": "AENS1",
              "group": "aens1",
              "teacher": "Sca"
            },
            {
              "id": 653,
              "name": "ALA (ala1)",
              "subject": "ALA",
              "group": "ala1",
              "teacher": "Gra"
            },
            {
              "id": 615,
              "name": "CHJ (choJ)",
              "subject": "CHJ",
              "group": "choJ",
              "teacher": "CHLJ"
            },
            {
              "id": 616,
              "name": "CHM (choM)",
              "subject": "CHM",
              "group": "choM",
              "teacher": "CHLM"
            },
            {
              "id": 785,
              "name": "ACHM2 (achoM2)",
              "subject": "ACHM2",
              "group": "achoM2",
              "teacher": "Kus"
            },
            {
              "id": 784,
              "name": "ACHJ2 (achoJ2)",
              "subject": "ACHJ2",
              "group": "achoJ2",
              "teacher": "Lie"
            },
            {
              "id": 778,
              "name": "CH (ch1)",
              "subject": "CH",
              "group": "ch1",
              "teacher": "Mic"
            },
            {
              "id": 728,
              "name": "DE (DE1)",
              "subject": "DE",
              "group": "DE1",
              "teacher": "Höl"
            },
            {
              "id": 729,
              "name": "DE (DE3)",
              "subject": "DE",
              "group": "DE3",
              "teacher": "Pau"
            },
            {
              "id": 730,
              "name": "MA (MA1)",
              "subject": "MA",
              "group": "MA1",
              "teacher": "Dom"
            },
            {
              "id": 731,
              "name": "MA (MA2)",
              "subject": "MA",
              "group": "MA2",
              "teacher": "Sch"
            },
            {
              "id": 732,
              "name": "CH (CH1)",
              "subject": "CH",
              "group": "CH1",
              "teacher": "Das"
            },
            {
              "id": 733,
              "name": "EN (EN2)",
              "subject": "EN",
              "group": "EN2",
              "teacher": "Wil"
            },
            {
              "id": 734,
              "name": "GE (GE1)",
              "subject": "GE",
              "group": "GE1",
              "teacher": "Pol"
            },
            {
              "id": 735,
              "name": "GE (GE2)",
              "subject": "GE",
              "group": "GE2",
              "teacher": "SeC"
            },
            {
              "id": 736,
              "name": "PH (PH1)",
              "subject": "PH",
              "group": "PH1",
              "teacher": "Gün"
            },
            {
              "id": 738,
              "name": "DE (de1)",
              "subject": "DE",
              "group": "de1",
              "teacher": "Hän"
            },
            {
              "id": 739,
              "name": "DE (de2)",
              "subject": "DE",
              "group": "de2",
              "teacher": "Men"
            },
            {
              "id": 740,
              "name": "MA (ma1)",
              "subject": "MA",
              "group": "ma1",
              "teacher": "Gie"
            },
            {
              "id": 741,
              "name": "MA (ma2)",
              "subject": "MA",
              "group": "ma2",
              "teacher": "Vet"
            },
            {
              "id": 742,
              "name": "MU (MU1)",
              "subject": "MU",
              "group": "MU1",
              "teacher": "Sca"
            },
            {
              "id": 743,
              "name": "BIO (bio1)",
              "subject": "BIO",
              "group": "bio1",
              "teacher": "Bro"
            },
            {
              "id": 744,
              "name": "GEO (geo1)",
              "subject": "GEO",
              "group": "geo1",
              "teacher": "Küh"
            },
            {
              "id": 745,
              "name": "INF (inf1)",
              "subject": "INF",
              "group": "inf1",
              "teacher": "Shu"
            },
            {
              "id": 746,
              "name": "ETH (eth2)",
              "subject": "ETH",
              "group": "eth2",
              "teacher": "Zin"
            },
            {
              "id": 747,
              "name": "REe (ree1)",
              "subject": "REe",
              "group": "ree1",
              "teacher": "Bru"
            },
            {
              "id": 748,
              "name": "REk (rek1)",
              "subject": "REk",
              "group": "rek1",
              "teacher": "SeC"
            },
            {
              "id": 749,
              "name": "CH (ch2)",
              "subject": "CH",
              "group": "ch2",
              "teacher": "Bro"
            },
            {
              "id": 750,
              "name": "PH (ph2)",
              "subject": "PH",
              "group": "ph2",
              "teacher": "Koc"
            },
            {
              "id": 751,
              "name": "MU (MU1)",
              "subject": "MU",
              "group": "MU1",
              "teacher": "Sca"
            },
            {
              "id": 752,
              "name": "AST (ast1)",
              "subject": "AST",
              "group": "ast1",
              "teacher": "Koc"
            },
            {
              "id": 753,
              "name": "BIO (bio2)",
              "subject": "BIO",
              "group": "bio2",
              "teacher": "Bro"
            },
            {
              "id": 754,
              "name": "CHJ (choJ)",
              "subject": "CHJ",
              "group": "choJ",
              "teacher": "Lie"
            },
            {
              "id": 755,
              "name": "CHM (choM)",
              "subject": "CHM",
              "group": "choM",
              "teacher": "Kus"
            },
            {
              "id": 756,
              "name": "MU (mu1)",
              "subject": "MU",
              "group": "mu1",
              "teacher": "Höl"
            },
            {
              "id": 757,
              "name": "GRW (grw2)",
              "subject": "GRW",
              "group": "grw2",
              "teacher": "Len"
            },
            {
              "id": 758,
              "name": "KU (ku1)",
              "subject": "KU",
              "group": "ku1",
              "teacher": "Kön"
            },
            {
              "id": 759,
              "name": "SPO (spo3)",
              "subject": "SPO",
              "group": "spo3",
              "teacher": "Mel"
            }
          ],
          "plannedLessons": [
            {
              "id": 782,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "en3" },
              "teacher": { "changed": false, "value": "Sei" },
              "room": { "changed": false, "value": "E2.15" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 783,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "eth1" },
              "teacher": { "changed": false, "value": "Zin" },
              "room": { "changed": false, "value": "E0.09" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 782,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "en3" },
              "teacher": { "changed": false, "value": "Sei" },
              "room": { "changed": false, "value": "E2.15" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 783,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "eth1" },
              "teacher": { "changed": false, "value": "Zin" },
              "room": { "changed": false, "value": "E0.09" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 728,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "DE1" },
              "teacher": { "changed": false, "value": "Höl" },
              "room": { "changed": false, "value": "S1.17" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 729,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "DE3" },
              "teacher": { "changed": false, "value": "Pau" },
              "room": { "changed": false, "value": "E0.09" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 730,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "MA1" },
              "teacher": { "changed": false, "value": "Dom" },
              "room": { "changed": false, "value": "S1.14" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 731,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "MA2" },
              "teacher": { "changed": false, "value": "Sch" },
              "room": { "changed": false, "value": "S1.13" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 728,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "DE1" },
              "teacher": { "changed": false, "value": "Höl" },
              "room": { "changed": false, "value": "S1.17" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 729,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "DE3" },
              "teacher": { "changed": false, "value": "Pau" },
              "room": { "changed": false, "value": "E0.09" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 730,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "MA1" },
              "teacher": { "changed": false, "value": "Dom" },
              "room": { "changed": false, "value": "S1.14" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 731,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "MA2" },
              "teacher": { "changed": false, "value": "Sch" },
              "room": { "changed": false, "value": "S1.13" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 765,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "bio3" },
              "teacher": { "changed": false, "value": "Met" },
              "room": { "changed": false, "value": "E0.19" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 766,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "inf2" },
              "teacher": { "changed": false, "value": "Gie" },
              "room": { "changed": false, "value": "S2.15" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 767,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "ph1" },
              "teacher": { "changed": false, "value": "Kok" },
              "room": { "changed": false, "value": "E1.18" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 765,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "bio3" },
              "teacher": { "changed": false, "value": "Met" },
              "room": { "changed": false, "value": "E0.19" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 766,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "inf2" },
              "teacher": { "changed": false, "value": "Gie" },
              "room": { "changed": false, "value": "S2.15" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 767,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "ph1" },
              "teacher": { "changed": false, "value": "Kok" },
              "room": { "changed": false, "value": "E1.18" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 615,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "choJ" },
              "teacher": { "changed": false, "value": "CHLJ Scö" },
              "room": { "changed": false, "value": null },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 616,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "choM" },
              "teacher": { "changed": false, "value": "CHLM Paw" },
              "room": { "changed": false, "value": "S2.17" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 754,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "choJ" },
              "teacher": { "changed": false, "value": "Lie" },
              "room": { "changed": false, "value": "Aula" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 755,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "choM" },
              "teacher": { "changed": false, "value": "Kus" },
              "room": { "changed": false, "value": "S1.15" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 756,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "mu1" },
              "teacher": { "changed": false, "value": "Höl" },
              "room": { "changed": false, "value": "S1.17" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 615,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "choJ" },
              "teacher": { "changed": false, "value": "CHLJ Scö" },
              "room": { "changed": false, "value": null },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 616,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "choM" },
              "teacher": { "changed": false, "value": "CHLM Paw" },
              "room": { "changed": false, "value": "S2.17" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 754,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "choJ" },
              "teacher": { "changed": false, "value": "Lie" },
              "room": { "changed": false, "value": "Aula" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 755,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "choM" },
              "teacher": { "changed": false, "value": "Kus" },
              "room": { "changed": false, "value": "S1.15" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 756,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "mu1" },
              "teacher": { "changed": false, "value": "Höl" },
              "room": { "changed": false, "value": "S1.17" },
              "schoolClass": "JG12",
              "info": null
            }
          ]
        },
        {
          "name": "AG",
          "type": "schoolClass",
          "timetable": [],
          "courses": [],
          "lessons": [],
          "plannedLessons": []
        },
        {
          "name": "DAZ",
          "type": "schoolClass",
          "timetable": [
            {
              "id": 804,
              "name": "DAZ",
              "subject": "DAZ",
              "group": null,
              "teacher": "Bue"
            },
            {
              "id": 805,
              "name": "DAZ",
              "subject": "DAZ",
              "group": null,
              "teacher": "Bue"
            }
          ],
          "courses": [],
          "lessons": [
            {
              "id": 804,
              "name": "DAZ",
              "subject": "DAZ",
              "group": null,
              "teacher": "Bue"
            },
            {
              "id": 805,
              "name": "DAZ",
              "subject": "DAZ",
              "group": null,
              "teacher": "Bue"
            }
          ],
          "plannedLessons": [
            {
              "id": 804,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "DAZ" },
              "teacher": { "changed": false, "value": "Bue" },
              "room": { "changed": false, "value": null },
              "schoolClass": "DAZ",
              "info": null
            },
            {
              "id": 804,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "DAZ" },
              "teacher": { "changed": false, "value": "Bue" },
              "room": { "changed": false, "value": null },
              "schoolClass": "DAZ",
              "info": null
            },
            {
              "id": 804,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "DAZ" },
              "teacher": { "changed": false, "value": "Bue" },
              "room": { "changed": false, "value": null },
              "schoolClass": "DAZ",
              "info": null
            }
          ]
        },
        {
          "name": "EMU",
          "type": "schoolClass",
          "timetable": [],
          "courses": [],
          "lessons": [],
          "plannedLessons": []
        },
        {
          "name": "INTEG",
          "type": "schoolClass",
          "timetable": [],
          "courses": [],
          "lessons": [],
          "plannedLessons": []
        },
        {
          "name": "LW",
          "type": "schoolClass",
          "timetable": [],
          "courses": [],
          "lessons": [],
          "plannedLessons": []
        },
        {
          "name": "REF",
          "type": "schoolClass",
          "timetable": [
            {
              "id": 586,
              "name": "Ref.",
              "subject": "Ref.",
              "group": null,
              "teacher": "Das"
            },
            {
              "id": 587,
              "name": "Ref.",
              "subject": "Ref.",
              "group": null,
              "teacher": "Dom"
            },
            {
              "id": 588,
              "name": "Ref.",
              "subject": "Ref.",
              "group": null,
              "teacher": "Göb"
            },
            {
              "id": 589,
              "name": "Ref.",
              "subject": "Ref.",
              "group": null,
              "teacher": "Len"
            },
            {
              "id": 590,
              "name": "Ref.",
              "subject": "Ref.",
              "group": null,
              "teacher": "Paw"
            },
            {
              "id": 591,
              "name": "Ref.",
              "subject": "Ref.",
              "group": null,
              "teacher": "Sca"
            },
            {
              "id": 592,
              "name": "Ref.",
              "subject": "Ref.",
              "group": null,
              "teacher": "Sch"
            },
            {
              "id": 593,
              "name": "Ref.",
              "subject": "Ref.",
              "group": null,
              "teacher": "Scg"
            }
          ],
          "courses": [],
          "lessons": [
            {
              "id": 586,
              "name": "Ref.",
              "subject": "Ref.",
              "group": null,
              "teacher": "Das"
            },
            {
              "id": 587,
              "name": "Ref.",
              "subject": "Ref.",
              "group": null,
              "teacher": "Dom"
            },
            {
              "id": 588,
              "name": "Ref.",
              "subject": "Ref.",
              "group": null,
              "teacher": "Göb"
            },
            {
              "id": 589,
              "name": "Ref.",
              "subject": "Ref.",
              "group": null,
              "teacher": "Len"
            },
            {
              "id": 590,
              "name": "Ref.",
              "subject": "Ref.",
              "group": null,
              "teacher": "Paw"
            },
            {
              "id": 591,
              "name": "Ref.",
              "subject": "Ref.",
              "group": null,
              "teacher": "Sca"
            },
            {
              "id": 592,
              "name": "Ref.",
              "subject": "Ref.",
              "group": null,
              "teacher": "Sch"
            },
            {
              "id": 593,
              "name": "Ref.",
              "subject": "Ref.",
              "group": null,
              "teacher": "Scg"
            }
          ],
          "plannedLessons": [
            {
              "id": 586,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "Ref." },
              "teacher": { "changed": false, "value": "Das Zsc" },
              "room": { "changed": false, "value": null },
              "schoolClass": "REF",
              "info": null
            },
            {
              "id": 593,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Ref." },
              "teacher": { "changed": false, "value": "Scg Scn" },
              "room": { "changed": false, "value": null },
              "schoolClass": "REF",
              "info": null
            },
            {
              "id": 587,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "Ref." },
              "teacher": { "changed": false, "value": "Dom Zsc" },
              "room": { "changed": false, "value": null },
              "schoolClass": "REF",
              "info": null
            }
          ]
        },
        {
          "name": "SMV",
          "type": "schoolClass",
          "timetable": [],
          "courses": [],
          "lessons": [],
          "plannedLessons": []
        },
        {
          "name": "SOA",
          "type": "schoolClass",
          "timetable": [
            {
              "id": 788,
              "name": "SL-B",
              "subject": "SL-B",
              "group": null,
              "teacher": "Pol"
            },
            {
              "id": 453,
              "name": "Nach",
              "subject": "Nach",
              "group": null,
              "teacher": "n.n."
            },
            {
              "id": 454,
              "name": "ÖPR",
              "subject": "ÖPR",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 455,
              "name": "OSB",
              "subject": "OSB",
              "group": null,
              "teacher": "Hän"
            },
            {
              "id": 787,
              "name": "SL-B",
              "subject": "SL-B",
              "group": null,
              "teacher": "Koc"
            },
            {
              "id": 585,
              "name": "ÖPR",
              "subject": "ÖPR",
              "group": null,
              "teacher": "Pol"
            }
          ],
          "courses": [],
          "lessons": [
            {
              "id": 788,
              "name": "SL-B",
              "subject": "SL-B",
              "group": null,
              "teacher": "Pol"
            },
            {
              "id": 453,
              "name": "Nach",
              "subject": "Nach",
              "group": null,
              "teacher": "n.n."
            },
            {
              "id": 454,
              "name": "ÖPR",
              "subject": "ÖPR",
              "group": null,
              "teacher": "BoI"
            },
            {
              "id": 455,
              "name": "OSB",
              "subject": "OSB",
              "group": null,
              "teacher": "Hän"
            },
            {
              "id": 787,
              "name": "SL-B",
              "subject": "SL-B",
              "group": null,
              "teacher": "Koc"
            },
            {
              "id": 585,
              "name": "ÖPR",
              "subject": "ÖPR",
              "group": null,
              "teacher": "Pol"
            }
          ],
          "plannedLessons": [
            {
              "id": 455,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "OSB" },
              "teacher": { "changed": false, "value": "Hän Kön" },
              "room": { "changed": false, "value": null },
              "schoolClass": "SOA",
              "info": null
            },
            {
              "id": 455,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "OSB" },
              "teacher": { "changed": false, "value": "Hän Kön" },
              "room": { "changed": false, "value": null },
              "schoolClass": "SOA",
              "info": null
            },
            {
              "id": 454,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "ÖPR" },
              "teacher": { "changed": false, "value": "BoI Kra Scl" },
              "room": { "changed": false, "value": null },
              "schoolClass": "SOA",
              "info": null
            },
            {
              "id": 585,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "ÖPR" },
              "teacher": { "changed": false, "value": "Pol Shr Mic" },
              "room": { "changed": false, "value": null },
              "schoolClass": "SOA",
              "info": null
            }
          ]
        }
      ],
      "info": [
        "Die AG Darstellendes Spiel findet heute nicht statt.",
        "Die AG-Volleyball findet für die 5. -7. Klassen entsprechend des verkürzten Unterrichtsplans statt.",
        "",
        "verkürzter Unterricht",
        "1. Stunde: 07.30 Uhr bis 08.00 Uhr",
        "2. Stunde: 08.05 Uhr bis 08.35 Uhr",
        "Frühstückspause",
        "3. Stunde: 08.50 Uhr bis 09.20 Uhr",
        "4. Stunde: 09.25 Uhr bis 09.55 Uhr",
        "5. Stunde: 10.00 Uhr bis 10.30 Uhr",
        "Zusatzpause (10er nehmen bitte ihre Pausenaufsicht wahr)",
        "6. Stunde: 10.50 Uhr bis 11.20 Uhr",
        "7. Stunde: 11.25 Uhr bis 11.55 Uhr",
        "Mittagspause",
        "8. Stunde: 12.25 Uhr bis 12.55 Uhr",
        "9. Stunde: 13.00 Uhr bis 13.30 Uhr",
        "10. Stunde: 13.35 Uhr bis 14.05 Uhr"
      ],
      "rooms": [
        {
          "name": "A0.09",
          "plannedLessons": [
            {
              "id": 44,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "MU" },
              "teacher": { "changed": false, "value": "Paw" },
              "room": { "changed": false, "value": "A0.09" },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 183,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "Lin" },
              "room": { "changed": false, "value": "A0.09" },
              "schoolClass": "7d",
              "info": null
            },
            {
              "id": 617,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "ens2" },
              "teacher": { "changed": false, "value": "Sca" },
              "room": { "changed": false, "value": "A0.09" },
              "schoolClass": "8a",
              "info": null
            },
            {
              "id": 617,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "ens2" },
              "teacher": { "changed": false, "value": "Sca" },
              "room": { "changed": false, "value": "A0.09" },
              "schoolClass": "8a",
              "info": null
            },
            {
              "id": 617,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "ens2" },
              "teacher": { "changed": false, "value": "Sca" },
              "room": { "changed": false, "value": "A0.09" },
              "schoolClass": "9a",
              "info": null
            },
            {
              "id": 617,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "ens2" },
              "teacher": { "changed": false, "value": "Sca" },
              "room": { "changed": false, "value": "A0.09" },
              "schoolClass": "9a",
              "info": null
            },
            {
              "id": 617,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "ens2" },
              "teacher": { "changed": false, "value": "Sca" },
              "room": { "changed": false, "value": "A0.09" },
              "schoolClass": "10a",
              "info": null
            },
            {
              "id": 617,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "ens2" },
              "teacher": { "changed": false, "value": "Sca" },
              "room": { "changed": false, "value": "A0.09" },
              "schoolClass": "10a",
              "info": null
            },
            {
              "id": 617,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "ens2" },
              "teacher": { "changed": false, "value": "Sca" },
              "room": { "changed": false, "value": "A0.09" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 617,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "ens2" },
              "teacher": { "changed": false, "value": "Sca" },
              "room": { "changed": false, "value": "A0.09" },
              "schoolClass": "JG11",
              "info": null
            }
          ],
          "type": "room"
        },
        {
          "name": "A0.16",
          "plannedLessons": [
            {
              "id": 789,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Bän" },
              "room": { "changed": false, "value": "A0.16" },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 789,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Bän" },
              "room": { "changed": false, "value": "A0.16" },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 789,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Bän" },
              "room": { "changed": false, "value": "A0.16" },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 789,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Bän" },
              "room": { "changed": false, "value": "A0.16" },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 789,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Bän" },
              "room": { "changed": false, "value": "A0.16" },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 789,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Bän" },
              "room": { "changed": false, "value": "A0.16" },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 789,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Bän" },
              "room": { "changed": false, "value": "A0.16" },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 789,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Bän" },
              "room": { "changed": false, "value": "A0.16" },
              "schoolClass": "5d",
              "info": null
            }
          ],
          "type": "room"
        },
        {
          "name": "Aula",
          "plannedLessons": [
            {
              "id": 754,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "choJ" },
              "teacher": { "changed": false, "value": "Lie" },
              "room": { "changed": false, "value": "Aula" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 754,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "choJ" },
              "teacher": { "changed": false, "value": "Lie" },
              "room": { "changed": false, "value": "Aula" },
              "schoolClass": "JG12",
              "info": null
            }
          ],
          "type": "room"
        },
        {
          "name": "E0.07",
          "plannedLessons": [
            {
              "id": 79,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "EN" },
              "teacher": { "changed": false, "value": "Kle" },
              "room": { "changed": false, "value": "E0.07" },
              "schoolClass": "6a",
              "info": null
            },
            {
              "id": 78,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "BoI" },
              "room": { "changed": false, "value": "E0.07" },
              "schoolClass": "6a",
              "info": null
            },
            {
              "id": 111,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "KOM" },
              "teacher": { "changed": false, "value": "BoI" },
              "room": { "changed": false, "value": "E0.07" },
              "schoolClass": "6a",
              "info": null
            },
            {
              "id": 133,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "Men" },
              "room": { "changed": false, "value": "E0.07" },
              "schoolClass": "7b",
              "info": null
            },
            {
              "id": 286,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "MU" },
              "teacher": { "changed": false, "value": "Bän" },
              "room": { "changed": false, "value": "E0.07" },
              "schoolClass": "8c",
              "info": null
            },
            {
              "id": 343,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "GEO" },
              "teacher": { "changed": false, "value": "Sch" },
              "room": { "changed": false, "value": "E0.07" },
              "schoolClass": "9c",
              "info": null
            }
          ],
          "type": "room"
        },
        {
          "name": "E0.08",
          "plannedLessons": [
            {
              "id": 96,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "EN" },
              "teacher": { "changed": false, "value": "Wil" },
              "room": { "changed": false, "value": "E0.08" },
              "schoolClass": "6b",
              "info": null
            },
            {
              "id": 95,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "Zin" },
              "room": { "changed": false, "value": "E0.08" },
              "schoolClass": "6b",
              "info": null
            },
            {
              "id": 99,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Sch" },
              "room": { "changed": false, "value": "E0.08" },
              "schoolClass": "6b",
              "info": null
            },
            {
              "id": 452,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "Int" },
              "teacher": { "changed": false, "value": "Sch" },
              "room": { "changed": false, "value": "E0.08" },
              "schoolClass": "7c",
              "info": null
            },
            {
              "id": 216,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Kok" },
              "room": { "changed": false, "value": "E0.08" },
              "schoolClass": "7e",
              "info": null
            },
            {
              "id": 279,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "GRW" },
              "teacher": { "changed": false, "value": "Len" },
              "room": { "changed": false, "value": "E0.08" },
              "schoolClass": "8c",
              "info": null
            }
          ],
          "type": "room"
        },
        {
          "name": "E0.09",
          "plannedLessons": [
            {
              "id": 203,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "GEO" },
              "teacher": { "changed": false, "value": "Mel" },
              "room": { "changed": false, "value": "E0.09" },
              "schoolClass": "7e",
              "info": null
            },
            {
              "id": 304,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "ETH-9ac" },
              "teacher": { "changed": false, "value": "Zin" },
              "room": { "changed": false, "value": "E0.09" },
              "schoolClass": "9a",
              "info": null
            },
            {
              "id": 304,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "ETH-9ac" },
              "teacher": { "changed": false, "value": "Zin" },
              "room": { "changed": false, "value": "E0.09" },
              "schoolClass": "9c",
              "info": null
            },
            {
              "id": 783,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "eth1" },
              "teacher": { "changed": false, "value": "Zin" },
              "room": { "changed": false, "value": "E0.09" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 783,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "eth1" },
              "teacher": { "changed": false, "value": "Zin" },
              "room": { "changed": false, "value": "E0.09" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 729,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "DE3" },
              "teacher": { "changed": false, "value": "Pau" },
              "room": { "changed": false, "value": "E0.09" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 729,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "DE3" },
              "teacher": { "changed": false, "value": "Pau" },
              "room": { "changed": false, "value": "E0.09" },
              "schoolClass": "JG12",
              "info": null
            }
          ],
          "type": "room"
        },
        {
          "name": "E0.12",
          "plannedLessons": [
            {
              "id": 103,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "GEO" },
              "teacher": { "changed": false, "value": "Lin" },
              "room": { "changed": false, "value": "E0.12" },
              "schoolClass": "6b",
              "info": null
            },
            {
              "id": 118,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Gla" },
              "room": { "changed": false, "value": "E0.12" },
              "schoolClass": "7a",
              "info": null
            },
            {
              "id": 232,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "GEO" },
              "teacher": { "changed": false, "value": "Kön" },
              "room": { "changed": false, "value": "E0.12" },
              "schoolClass": "8a",
              "info": null
            },
            {
              "id": 641,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "geo2" },
              "teacher": { "changed": false, "value": "Lin" },
              "room": { "changed": false, "value": "E0.12" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 641,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "geo2" },
              "teacher": { "changed": false, "value": "Lin" },
              "room": { "changed": false, "value": "E0.12" },
              "schoolClass": "JG11",
              "info": null
            }
          ],
          "type": "room"
        },
        {
          "name": "E0.13",
          "plannedLessons": [
            {
              "id": 484,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "FlIn" },
              "teacher": { "changed": false, "value": "The" },
              "room": { "changed": false, "value": "E0.13" },
              "schoolClass": "6a",
              "info": null
            },
            {
              "id": 484,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "FlIn" },
              "teacher": { "changed": false, "value": "The" },
              "room": { "changed": false, "value": "E0.13" },
              "schoolClass": "6a",
              "info": null
            },
            {
              "id": 484,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "FlIn" },
              "teacher": { "changed": false, "value": "The" },
              "room": { "changed": false, "value": "E0.13" },
              "schoolClass": "6b",
              "info": null
            },
            {
              "id": 484,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "FlIn" },
              "teacher": { "changed": false, "value": "The" },
              "room": { "changed": false, "value": "E0.13" },
              "schoolClass": "6b",
              "info": null
            }
          ],
          "type": "room"
        },
        {
          "name": "E0.14",
          "plannedLessons": [
            {
              "id": 71,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "GE" },
              "teacher": { "changed": false, "value": "Mar" },
              "room": { "changed": false, "value": "E0.14" },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 193,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "GEO" },
              "teacher": { "changed": false, "value": "Mar" },
              "room": { "changed": false, "value": "E0.14" },
              "schoolClass": "7d",
              "info": null
            },
            {
              "id": 354,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "Vet" },
              "room": { "changed": false, "value": "E0.14" },
              "schoolClass": "10a",
              "info": null
            },
            {
              "id": 410,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "GEO" },
              "teacher": { "changed": false, "value": "Mar" },
              "room": { "changed": false, "value": "E0.14" },
              "schoolClass": "10c",
              "info": null
            }
          ],
          "type": "room"
        },
        {
          "name": "E0.18",
          "plannedLessons": [
            {
              "id": 11,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "BIO" },
              "teacher": { "changed": false, "value": "HoK" },
              "room": { "changed": false, "value": "E0.18" },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 405,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "BIO" },
              "teacher": { "changed": false, "value": "HoK" },
              "room": { "changed": false, "value": "E0.18" },
              "schoolClass": "10c",
              "info": null
            },
            {
              "id": 426,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "BIO" },
              "teacher": { "changed": false, "value": "HoK" },
              "room": { "changed": false, "value": "E0.18" },
              "schoolClass": "10d",
              "info": null
            },
            {
              "id": 640,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "bio2" },
              "teacher": { "changed": false, "value": "HoK" },
              "room": { "changed": false, "value": "E0.18" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 640,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "bio2" },
              "teacher": { "changed": false, "value": "HoK" },
              "room": { "changed": false, "value": "E0.18" },
              "schoolClass": "JG11",
              "info": null
            }
          ],
          "type": "room"
        },
        {
          "name": "E0.19",
          "plannedLessons": [
            {
              "id": 295,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "BIO" },
              "teacher": { "changed": false, "value": "Bro" },
              "room": { "changed": false, "value": "E0.19" },
              "schoolClass": "9a",
              "info": null
            },
            {
              "id": 765,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "bio3" },
              "teacher": { "changed": false, "value": "Met" },
              "room": { "changed": false, "value": "E0.19" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 765,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "bio3" },
              "teacher": { "changed": false, "value": "Met" },
              "room": { "changed": false, "value": "E0.19" },
              "schoolClass": "JG12",
              "info": null
            }
          ],
          "type": "room"
        },
        {
          "name": "E1.07",
          "plannedLessons": [
            {
              "id": 7,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Kok" },
              "room": { "changed": false, "value": "E1.07" },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 2,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "EN" },
              "teacher": { "changed": false, "value": "Scl" },
              "room": { "changed": false, "value": "E1.07" },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 8,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "Pau" },
              "room": { "changed": false, "value": "E1.07" },
              "schoolClass": "5a",
              "info": null
            }
          ],
          "type": "room"
        },
        {
          "name": "E1.08",
          "plannedLessons": [
            {
              "id": 31,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "BoI" },
              "room": { "changed": false, "value": "E1.08" },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 30,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Kok" },
              "room": { "changed": false, "value": "E1.08" },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 25,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "EN" },
              "teacher": { "changed": false, "value": "Kle" },
              "room": { "changed": false, "value": "E1.08" },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 445,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "FlIn" },
              "teacher": { "changed": false, "value": "Süm" },
              "room": { "changed": false, "value": "E1.08" },
              "schoolClass": "6a",
              "info": null
            },
            {
              "id": 445,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "FlIn" },
              "teacher": { "changed": false, "value": "Süm" },
              "room": { "changed": false, "value": "E1.08" },
              "schoolClass": "6a",
              "info": null
            },
            {
              "id": 445,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "FlIn" },
              "teacher": { "changed": false, "value": "Süm" },
              "room": { "changed": false, "value": "E1.08" },
              "schoolClass": "6b",
              "info": null
            },
            {
              "id": 445,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "FlIn" },
              "teacher": { "changed": false, "value": "Süm" },
              "room": { "changed": false, "value": "E1.08" },
              "schoolClass": "6b",
              "info": null
            }
          ],
          "type": "room"
        },
        {
          "name": "E1.09",
          "plannedLessons": [
            {
              "id": 444,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "FlIn" },
              "teacher": { "changed": false, "value": "Vet" },
              "room": { "changed": false, "value": "E1.09" },
              "schoolClass": "6a",
              "info": null
            },
            {
              "id": 444,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "FlIn" },
              "teacher": { "changed": false, "value": "Vet" },
              "room": { "changed": false, "value": "E1.09" },
              "schoolClass": "6a",
              "info": null
            },
            {
              "id": 444,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "FlIn" },
              "teacher": { "changed": false, "value": "Vet" },
              "room": { "changed": false, "value": "E1.09" },
              "schoolClass": "6b",
              "info": null
            },
            {
              "id": 444,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "FlIn" },
              "teacher": { "changed": false, "value": "Vet" },
              "room": { "changed": false, "value": "E1.09" },
              "schoolClass": "6b",
              "info": null
            },
            {
              "id": 294,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Vet" },
              "room": { "changed": false, "value": "E1.09" },
              "schoolClass": "9a",
              "info": null
            },
            {
              "id": 378,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "Vet" },
              "room": { "changed": false, "value": "E1.09" },
              "schoolClass": "10b",
              "info": null
            },
            {
              "id": 378,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "Vet" },
              "room": { "changed": false, "value": "E1.09" },
              "schoolClass": "10b",
              "info": null
            }
          ],
          "type": "room"
        },
        {
          "name": "E1.12",
          "plannedLessons": [
            {
              "id": 164,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Das" },
              "room": { "changed": false, "value": "E1.12" },
              "schoolClass": "7c",
              "info": null
            },
            {
              "id": 164,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Das" },
              "room": { "changed": false, "value": "E1.12" },
              "schoolClass": "7c",
              "info": null
            },
            {
              "id": 163,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "Ru-7cde" },
              "teacher": { "changed": false, "value": "Küh" },
              "room": { "changed": false, "value": "E1.12" },
              "schoolClass": "7c",
              "info": null
            },
            {
              "id": 163,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "Ru-7cde" },
              "teacher": { "changed": false, "value": "Küh" },
              "room": { "changed": false, "value": "E1.12" },
              "schoolClass": "7d",
              "info": null
            },
            {
              "id": 163,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "Ru-7cde" },
              "teacher": { "changed": false, "value": "Küh" },
              "room": { "changed": false, "value": "E1.12" },
              "schoolClass": "7e",
              "info": null
            },
            {
              "id": 421,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "Wil" },
              "room": { "changed": false, "value": "E1.12" },
              "schoolClass": "10d",
              "info": null
            }
          ],
          "type": "room"
        },
        {
          "name": "E1.13",
          "plannedLessons": [
            {
              "id": 135,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "FR-7b-7e" },
              "teacher": { "changed": false, "value": "Ste" },
              "room": { "changed": false, "value": "E1.13" },
              "schoolClass": "7b",
              "info": null
            },
            {
              "id": 599,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "LRS" },
              "teacher": { "changed": false, "value": "Bru" },
              "room": { "changed": false, "value": "E1.13" },
              "schoolClass": "7b",
              "info": null
            },
            {
              "id": 599,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "LRS" },
              "teacher": { "changed": false, "value": "Bru" },
              "room": { "changed": false, "value": "E1.13" },
              "schoolClass": "7c",
              "info": null
            },
            {
              "id": 599,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "LRS" },
              "teacher": { "changed": false, "value": "Bru" },
              "room": { "changed": false, "value": "E1.13" },
              "schoolClass": "7d",
              "info": null
            },
            {
              "id": 135,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "FR-7b-7e" },
              "teacher": { "changed": false, "value": "Ste" },
              "room": { "changed": false, "value": "E1.13" },
              "schoolClass": "7e",
              "info": null
            },
            {
              "id": 293,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "RU-st9" },
              "teacher": { "changed": false, "value": "Ste" },
              "room": { "changed": false, "value": "E1.13" },
              "schoolClass": "9a",
              "info": null
            },
            {
              "id": 302,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "RE/e-st9" },
              "teacher": { "changed": false, "value": "Bru" },
              "room": { "changed": false, "value": "E1.13" },
              "schoolClass": "9a",
              "info": null
            },
            {
              "id": 293,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "RU-st9" },
              "teacher": { "changed": false, "value": "Ste" },
              "room": { "changed": false, "value": "E1.13" },
              "schoolClass": "9b",
              "info": null
            },
            {
              "id": 302,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "RE/e-st9" },
              "teacher": { "changed": false, "value": "Bru" },
              "room": { "changed": false, "value": "E1.13" },
              "schoolClass": "9b",
              "info": null
            },
            {
              "id": 293,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "RU-st9" },
              "teacher": { "changed": false, "value": "Ste" },
              "room": { "changed": false, "value": "E1.13" },
              "schoolClass": "9c",
              "info": null
            },
            {
              "id": 302,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "RE/e-st9" },
              "teacher": { "changed": false, "value": "Bru" },
              "room": { "changed": false, "value": "E1.13" },
              "schoolClass": "9c",
              "info": null
            },
            {
              "id": 631,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "fr1" },
              "teacher": { "changed": false, "value": "Ste" },
              "room": { "changed": false, "value": "E1.13" },
              "schoolClass": "JG11",
              "info": null
            }
          ],
          "type": "room"
        },
        {
          "name": "E1.14",
          "plannedLessons": [
            {
              "id": 137,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Thi" },
              "room": { "changed": false, "value": "E1.14" },
              "schoolClass": "7b",
              "info": null
            },
            {
              "id": 192,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "GRW" },
              "teacher": { "changed": false, "value": "Len" },
              "room": { "changed": false, "value": "E1.14" },
              "schoolClass": "7d",
              "info": null
            },
            {
              "id": 425,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Scg Scn" },
              "room": { "changed": false, "value": "E1.14" },
              "schoolClass": "10d",
              "info": null
            },
            {
              "id": 606,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "GE1" },
              "teacher": { "changed": false, "value": "Leh" },
              "room": { "changed": false, "value": "E1.14" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 624,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "de1" },
              "teacher": { "changed": false, "value": "Hän" },
              "room": { "changed": false, "value": "E1.14" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 624,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "de1" },
              "teacher": { "changed": false, "value": "Hän" },
              "room": { "changed": false, "value": "E1.14" },
              "schoolClass": "JG11",
              "info": null
            }
          ],
          "type": "room"
        },
        {
          "name": "E1.15",
          "plannedLessons": [
            {
              "id": 723,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "AG S" },
              "teacher": { "changed": false, "value": "Vet" },
              "room": { "changed": false, "value": "E1.15" },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 723,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "AG S" },
              "teacher": { "changed": false, "value": "Vet" },
              "room": { "changed": false, "value": "E1.15" },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 723,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "AG S" },
              "teacher": { "changed": false, "value": "Vet" },
              "room": { "changed": false, "value": "E1.15" },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 723,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "AG S" },
              "teacher": { "changed": false, "value": "Vet" },
              "room": { "changed": false, "value": "E1.15" },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 723,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "AG S" },
              "teacher": { "changed": false, "value": "Vet" },
              "room": { "changed": false, "value": "E1.15" },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 723,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "AG S" },
              "teacher": { "changed": false, "value": "Vet" },
              "room": { "changed": false, "value": "E1.15" },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 723,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "AG S" },
              "teacher": { "changed": false, "value": "Vet" },
              "room": { "changed": false, "value": "E1.15" },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 723,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "AG S" },
              "teacher": { "changed": false, "value": "Vet" },
              "room": { "changed": false, "value": "E1.15" },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 142,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "GRW" },
              "teacher": { "changed": false, "value": "Kie" },
              "room": { "changed": false, "value": "E1.15" },
              "schoolClass": "7b",
              "info": null
            },
            {
              "id": 316,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Scg" },
              "room": { "changed": false, "value": "E1.15" },
              "schoolClass": "9b",
              "info": null
            },
            {
              "id": 320,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "GE" },
              "teacher": { "changed": false, "value": "Kie" },
              "room": { "changed": false, "value": "E1.15" },
              "schoolClass": "9b",
              "info": null
            },
            {
              "id": 387,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "GRW" },
              "teacher": { "changed": false, "value": "Kie" },
              "room": { "changed": false, "value": "E1.15" },
              "schoolClass": "10b",
              "info": null
            },
            {
              "id": 382,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Gün" },
              "room": { "changed": false, "value": "E1.15" },
              "schoolClass": "10b",
              "info": null
            }
          ],
          "type": "room"
        },
        {
          "name": "E1.18",
          "plannedLessons": [
            {
              "id": 140,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "PH" },
              "teacher": { "changed": false, "value": "Kok" },
              "room": { "changed": false, "value": "E1.18" },
              "schoolClass": "7b",
              "info": null
            },
            {
              "id": 374,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "PH" },
              "teacher": { "changed": false, "value": "Gün" },
              "room": { "changed": false, "value": "E1.18" },
              "schoolClass": "10a",
              "info": null
            },
            {
              "id": 361,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "PH" },
              "teacher": { "changed": false, "value": "Gün" },
              "room": { "changed": false, "value": "E1.18" },
              "schoolClass": "10a",
              "info": null
            },
            {
              "id": 607,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "PH1" },
              "teacher": { "changed": false, "value": "Gla" },
              "room": { "changed": false, "value": "E1.18" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 767,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "ph1" },
              "teacher": { "changed": false, "value": "Kok" },
              "room": { "changed": false, "value": "E1.18" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 767,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "ph1" },
              "teacher": { "changed": false, "value": "Kok" },
              "room": { "changed": false, "value": "E1.18" },
              "schoolClass": "JG12",
              "info": null
            }
          ],
          "type": "room"
        },
        {
          "name": "E1.19",
          "plannedLessons": [
            {
              "id": 121,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "PH" },
              "teacher": { "changed": false, "value": "Thi" },
              "room": { "changed": false, "value": "E1.19" },
              "schoolClass": "7a",
              "info": null
            },
            {
              "id": 167,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "PH" },
              "teacher": { "changed": false, "value": "Gün" },
              "room": { "changed": false, "value": "E1.19" },
              "schoolClass": "7c",
              "info": null
            }
          ],
          "type": "room"
        },
        {
          "name": "E2.07",
          "plannedLessons": [
            {
              "id": 43,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "EN" },
              "teacher": { "changed": false, "value": "Bet" },
              "room": { "changed": false, "value": "E2.07" },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 43,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "EN" },
              "teacher": { "changed": false, "value": "Bet" },
              "room": { "changed": false, "value": "E2.07" },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 49,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "Wil" },
              "room": { "changed": false, "value": "E2.07" },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 274,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Thi" },
              "room": { "changed": false, "value": "E2.07" },
              "schoolClass": "8c",
              "info": null
            },
            {
              "id": 362,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "GE" },
              "teacher": { "changed": false, "value": "Pau" },
              "room": { "changed": false, "value": "E2.07" },
              "schoolClass": "10a",
              "info": null
            }
          ],
          "type": "room"
        },
        {
          "name": "E2.08",
          "plannedLessons": [
            {
              "id": 61,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "EN" },
              "teacher": { "changed": false, "value": "Scl" },
              "room": { "changed": false, "value": "E2.08" },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 61,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "EN" },
              "teacher": { "changed": false, "value": "Scl" },
              "room": { "changed": false, "value": "E2.08" },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 66,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Gla" },
              "room": { "changed": false, "value": "E2.08" },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 117,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "RU-7ab" },
              "teacher": { "changed": false, "value": "Sei" },
              "room": { "changed": false, "value": "E2.08" },
              "schoolClass": "7a",
              "info": null
            },
            {
              "id": 117,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "RU-7ab" },
              "teacher": { "changed": false, "value": "Sei" },
              "room": { "changed": false, "value": "E2.08" },
              "schoolClass": "7b",
              "info": null
            },
            {
              "id": 254,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Dom Zsc" },
              "room": { "changed": false, "value": "E2.08" },
              "schoolClass": "8b",
              "info": null
            },
            {
              "id": 604,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "EN1" },
              "teacher": { "changed": false, "value": "Göb" },
              "room": { "changed": false, "value": "E2.08" },
              "schoolClass": "JG11",
              "info": null
            }
          ],
          "type": "room"
        },
        {
          "name": "E2.09",
          "plannedLessons": [
            {
              "id": 212,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "Leh" },
              "room": { "changed": false, "value": "E2.09" },
              "schoolClass": "7e",
              "info": null
            },
            {
              "id": 333,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "Leh" },
              "room": { "changed": false, "value": "E2.09" },
              "schoolClass": "9c",
              "info": null
            },
            {
              "id": 334,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": true, "value": "EN" },
              "teacher": { "changed": true, "value": "Sei" },
              "room": { "changed": true, "value": "E2.09" },
              "schoolClass": "9c",
              "info": "statt Mi (04.09.) St.6, Raum geändert; INF Frau Schuppan fällt aus"
            },
            {
              "id": 401,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "EN" },
              "teacher": { "changed": false, "value": "Kle" },
              "room": { "changed": false, "value": "E2.09" },
              "schoolClass": "10c",
              "info": null
            }
          ],
          "type": "room"
        },
        {
          "name": "E2.12",
          "plannedLessons": [
            {
              "id": 258,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "GE" },
              "teacher": { "changed": false, "value": "Pau" },
              "room": { "changed": false, "value": "E2.12" },
              "schoolClass": "8b",
              "info": null
            },
            {
              "id": 291,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "EN" },
              "teacher": { "changed": false, "value": "Din" },
              "room": { "changed": false, "value": "E2.12" },
              "schoolClass": "9a",
              "info": null
            },
            {
              "id": 605,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "EN2" },
              "teacher": { "changed": false, "value": "Din" },
              "room": { "changed": false, "value": "E2.12" },
              "schoolClass": "JG11",
              "info": null
            }
          ],
          "type": "room"
        },
        {
          "name": "E2.13",
          "plannedLessons": [
            {
              "id": 80,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "FR" },
              "teacher": { "changed": false, "value": "Kra" },
              "room": { "changed": false, "value": "E2.13" },
              "schoolClass": "6a",
              "info": null
            },
            {
              "id": 116,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "FR-7a-7c" },
              "teacher": { "changed": false, "value": "Kra" },
              "room": { "changed": false, "value": "E2.13" },
              "schoolClass": "7a",
              "info": null
            },
            {
              "id": 116,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "FR-7a-7c" },
              "teacher": { "changed": false, "value": "Kra" },
              "room": { "changed": false, "value": "E2.13" },
              "schoolClass": "7c",
              "info": null
            },
            {
              "id": 335,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "FR-9c" },
              "teacher": { "changed": false, "value": "Kra" },
              "room": { "changed": false, "value": "E2.13" },
              "schoolClass": "9c",
              "info": null
            }
          ],
          "type": "room"
        },
        {
          "name": "E2.14",
          "plannedLessons": [
            {
              "id": 221,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "GRW" },
              "teacher": { "changed": false, "value": "Kie" },
              "room": { "changed": false, "value": "E2.14" },
              "schoolClass": "7e",
              "info": null
            },
            {
              "id": 222,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "Len" },
              "room": { "changed": false, "value": "E2.14" },
              "schoolClass": "8a",
              "info": null
            },
            {
              "id": 250,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "Lin" },
              "room": { "changed": false, "value": "E2.14" },
              "schoolClass": "8b",
              "info": null
            },
            {
              "id": 379,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "EN" },
              "teacher": { "changed": false, "value": "Scl" },
              "room": { "changed": false, "value": "E2.14" },
              "schoolClass": "10b",
              "info": null
            },
            {
              "id": 459,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "LA-10bd" },
              "teacher": { "changed": false, "value": "Kie" },
              "room": { "changed": false, "value": "E2.14" },
              "schoolClass": "10b",
              "info": null
            },
            {
              "id": 459,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "LA-10bd" },
              "teacher": { "changed": false, "value": "Kie" },
              "room": { "changed": false, "value": "E2.14" },
              "schoolClass": "10d",
              "info": null
            }
          ],
          "type": "room"
        },
        {
          "name": "E2.15",
          "plannedLessons": [
            {
              "id": 271,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "EN" },
              "teacher": { "changed": false, "value": "Din" },
              "room": { "changed": false, "value": "E2.15" },
              "schoolClass": "8c",
              "info": null
            },
            {
              "id": 400,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "Len" },
              "room": { "changed": false, "value": "E2.15" },
              "schoolClass": "10c",
              "info": null
            },
            {
              "id": 625,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "de2" },
              "teacher": { "changed": false, "value": "Men" },
              "room": { "changed": false, "value": "E2.15" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 625,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "de2" },
              "teacher": { "changed": false, "value": "Men" },
              "room": { "changed": false, "value": "E2.15" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 782,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "en3" },
              "teacher": { "changed": false, "value": "Sei" },
              "room": { "changed": false, "value": "E2.15" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 782,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "en3" },
              "teacher": { "changed": false, "value": "Sei" },
              "room": { "changed": false, "value": "E2.15" },
              "schoolClass": "JG12",
              "info": null
            }
          ],
          "type": "room"
        },
        {
          "name": "E2.16",
          "plannedLessons": [
            {
              "id": 482,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Küh" },
              "room": { "changed": false, "value": "E2.16" },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 482,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Küh" },
              "room": { "changed": false, "value": "E2.16" },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 482,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Küh" },
              "room": { "changed": false, "value": "E2.16" },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 482,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Küh" },
              "room": { "changed": false, "value": "E2.16" },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 482,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Küh" },
              "room": { "changed": false, "value": "E2.16" },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 482,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Küh" },
              "room": { "changed": false, "value": "E2.16" },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 482,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Küh" },
              "room": { "changed": false, "value": "E2.16" },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 482,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Küh" },
              "room": { "changed": false, "value": "E2.16" },
              "schoolClass": "5d",
              "info": null
            }
          ],
          "type": "room"
        },
        {
          "name": "E2.18",
          "plannedLessons": [
            {
              "id": 427,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "CH" },
              "teacher": { "changed": false, "value": "Met" },
              "room": { "changed": false, "value": "E2.18" },
              "schoolClass": "10d",
              "info": null
            },
            {
              "id": 427,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "CH" },
              "teacher": { "changed": false, "value": "Met" },
              "room": { "changed": false, "value": "E2.18" },
              "schoolClass": "10d",
              "info": null
            },
            {
              "id": 603,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "CH1" },
              "teacher": { "changed": false, "value": "Das" },
              "room": { "changed": false, "value": "E2.18" },
              "schoolClass": "JG11",
              "info": null
            }
          ],
          "type": "room"
        },
        {
          "name": "E2.19",
          "plannedLessons": [
            {
              "id": 228,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "CH" },
              "teacher": { "changed": false, "value": "Bro" },
              "room": { "changed": false, "value": "E2.19" },
              "schoolClass": "8a",
              "info": null
            },
            {
              "id": 256,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "CH" },
              "teacher": { "changed": false, "value": "Bro" },
              "room": { "changed": false, "value": "E2.19" },
              "schoolClass": "8b",
              "info": null
            },
            {
              "id": 360,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "CH" },
              "teacher": { "changed": false, "value": "Met" },
              "room": { "changed": false, "value": "E2.19" },
              "schoolClass": "10a",
              "info": null
            },
            {
              "id": 373,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "CH" },
              "teacher": { "changed": false, "value": "Met" },
              "room": { "changed": false, "value": "E2.19" },
              "schoolClass": "10a",
              "info": null
            }
          ],
          "type": "room"
        },
        {
          "name": "KUFA",
          "plannedLessons": [
            {
              "id": 476,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "BoM" },
              "room": { "changed": false, "value": "KUFA" },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 476,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "BoM" },
              "room": { "changed": false, "value": "KUFA" },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 476,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "BoM" },
              "room": { "changed": false, "value": "KUFA" },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 476,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "BoM" },
              "room": { "changed": false, "value": "KUFA" },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 476,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "BoM" },
              "room": { "changed": false, "value": "KUFA" },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 476,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "BoM" },
              "room": { "changed": false, "value": "KUFA" },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 476,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "BoM" },
              "room": { "changed": false, "value": "KUFA" },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 476,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "BoM" },
              "room": { "changed": false, "value": "KUFA" },
              "schoolClass": "5d",
              "info": null
            }
          ],
          "type": "room"
        },
        {
          "name": "M1.05",
          "plannedLessons": [
            {
              "id": 129,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": true, "value": "KU" },
              "teacher": { "changed": true, "value": "Süm" },
              "room": { "changed": true, "value": "M1.05" },
              "schoolClass": "7a",
              "info": "verlegt von St.7, Raum geändert; GE Frau Kiermeyer gehalten am Fr (30.08.) St.2, Raum geändert"
            },
            {
              "id": 160,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "Süm" },
              "room": { "changed": false, "value": "M1.05" },
              "schoolClass": "7c",
              "info": null
            },
            {
              "id": 369,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "KU" },
              "teacher": { "changed": false, "value": "Kön" },
              "room": { "changed": false, "value": "M1.05" },
              "schoolClass": "10a",
              "info": null
            },
            {
              "id": 386,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "GE" },
              "teacher": { "changed": false, "value": "Pol" },
              "room": { "changed": false, "value": "M1.05" },
              "schoolClass": "10b",
              "info": null
            },
            {
              "id": 429,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "GE" },
              "teacher": { "changed": false, "value": "Pol" },
              "room": { "changed": false, "value": "M1.05" },
              "schoolClass": "10d",
              "info": null
            }
          ],
          "type": "room"
        },
        {
          "name": "M1.08",
          "plannedLessons": [
            {
              "id": 191,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "GE" },
              "teacher": { "changed": false, "value": "Sca" },
              "room": { "changed": false, "value": "M1.08" },
              "schoolClass": "7d",
              "info": null
            },
            {
              "id": 305,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "KU" },
              "teacher": { "changed": false, "value": "Süm" },
              "room": { "changed": false, "value": "M1.08" },
              "schoolClass": "9a",
              "info": null
            },
            {
              "id": 348,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "KU" },
              "teacher": { "changed": false, "value": "Süm" },
              "room": { "changed": false, "value": "M1.08" },
              "schoolClass": "9c",
              "info": null
            }
          ],
          "type": "room"
        },
        {
          "name": "S1.13",
          "plannedLessons": [
            {
              "id": 626,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "ma1" },
              "teacher": { "changed": false, "value": "Scg Scn" },
              "room": { "changed": false, "value": "S1.13" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 626,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "ma1" },
              "teacher": { "changed": false, "value": "Scg Scn" },
              "room": { "changed": false, "value": "S1.13" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 731,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "MA2" },
              "teacher": { "changed": false, "value": "Sch" },
              "room": { "changed": false, "value": "S1.13" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 731,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "MA2" },
              "teacher": { "changed": false, "value": "Sch" },
              "room": { "changed": false, "value": "S1.13" },
              "schoolClass": "JG12",
              "info": null
            }
          ],
          "type": "room"
        },
        {
          "name": "S1.14",
          "plannedLessons": [
            {
              "id": 404,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Dom" },
              "room": { "changed": false, "value": "S1.14" },
              "schoolClass": "10c",
              "info": null
            },
            {
              "id": 404,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Dom" },
              "room": { "changed": false, "value": "S1.14" },
              "schoolClass": "10c",
              "info": null
            },
            {
              "id": 627,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "ma2" },
              "teacher": { "changed": false, "value": "Thi" },
              "room": { "changed": false, "value": "S1.14" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 627,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "ma2" },
              "teacher": { "changed": false, "value": "Thi" },
              "room": { "changed": false, "value": "S1.14" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 730,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "MA1" },
              "teacher": { "changed": false, "value": "Dom" },
              "room": { "changed": false, "value": "S1.14" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 730,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "MA1" },
              "teacher": { "changed": false, "value": "Dom" },
              "room": { "changed": false, "value": "S1.14" },
              "schoolClass": "JG12",
              "info": null
            }
          ],
          "type": "room"
        },
        {
          "name": "S1.15",
          "plannedLessons": [
            {
              "id": 791,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Bis" },
              "room": { "changed": true, "value": "S1.15" },
              "schoolClass": "5a",
              "info": "Raum geändert"
            },
            {
              "id": 791,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Bis" },
              "room": { "changed": true, "value": "S1.15" },
              "schoolClass": "5a",
              "info": "Raum geändert"
            },
            {
              "id": 791,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Bis" },
              "room": { "changed": true, "value": "S1.15" },
              "schoolClass": "5b",
              "info": "Raum geändert"
            },
            {
              "id": 791,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Bis" },
              "room": { "changed": true, "value": "S1.15" },
              "schoolClass": "5b",
              "info": "Raum geändert"
            },
            {
              "id": 791,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Bis" },
              "room": { "changed": true, "value": "S1.15" },
              "schoolClass": "5c",
              "info": "Raum geändert"
            },
            {
              "id": 791,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Bis" },
              "room": { "changed": true, "value": "S1.15" },
              "schoolClass": "5c",
              "info": "Raum geändert"
            },
            {
              "id": 791,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Bis" },
              "room": { "changed": true, "value": "S1.15" },
              "schoolClass": "5d",
              "info": "Raum geändert"
            },
            {
              "id": 791,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Bis" },
              "room": { "changed": true, "value": "S1.15" },
              "schoolClass": "5d",
              "info": "Raum geändert"
            },
            {
              "id": 755,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "choM" },
              "teacher": { "changed": false, "value": "Kus" },
              "room": { "changed": false, "value": "S1.15" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 755,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "choM" },
              "teacher": { "changed": false, "value": "Kus" },
              "room": { "changed": false, "value": "S1.15" },
              "schoolClass": "JG12",
              "info": null
            }
          ],
          "type": "room"
        },
        {
          "name": "S1.17",
          "plannedLessons": [
            {
              "id": 26,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "MU" },
              "teacher": { "changed": false, "value": "Bän" },
              "room": { "changed": false, "value": "S1.17" },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 114,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "Höl" },
              "room": { "changed": false, "value": "S1.17" },
              "schoolClass": "7a",
              "info": null
            },
            {
              "id": 176,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "MU" },
              "teacher": { "changed": false, "value": "Höl" },
              "room": { "changed": false, "value": "S1.17" },
              "schoolClass": "7c",
              "info": null
            },
            {
              "id": 728,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "DE1" },
              "teacher": { "changed": false, "value": "Höl" },
              "room": { "changed": false, "value": "S1.17" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 728,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "DE1" },
              "teacher": { "changed": false, "value": "Höl" },
              "room": { "changed": false, "value": "S1.17" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 756,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "mu1" },
              "teacher": { "changed": false, "value": "Höl" },
              "room": { "changed": false, "value": "S1.17" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 756,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "mu1" },
              "teacher": { "changed": false, "value": "Höl" },
              "room": { "changed": false, "value": "S1.17" },
              "schoolClass": "JG12",
              "info": null
            }
          ],
          "type": "room"
        },
        {
          "name": "S2.12",
          "plannedLessons": [
            {
              "id": 639,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "ast1" },
              "teacher": { "changed": false, "value": "Koc" },
              "room": { "changed": false, "value": "S2.12" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 639,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "ast1" },
              "teacher": { "changed": false, "value": "Koc" },
              "room": { "changed": false, "value": "S2.12" },
              "schoolClass": "JG11",
              "info": null
            }
          ],
          "type": "room"
        },
        {
          "name": "S2.13",
          "plannedLessons": [
            {
              "id": 267,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "INF-8b-2" },
              "teacher": { "changed": false, "value": "Gie" },
              "room": { "changed": false, "value": "S2.13" },
              "schoolClass": "8b",
              "info": null
            }
          ],
          "type": "room"
        },
        {
          "name": "S2.15",
          "plannedLessons": [
            {
              "id": "209+",
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "INF" },
              "teacher": { "changed": false, "value": "Gie" },
              "room": { "changed": true, "value": "S2.15" },
              "schoolClass": "7e",
              "info": "gesamte Klasse 7e, Raum geändert"
            },
            {
              "id": 766,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "inf2" },
              "teacher": { "changed": false, "value": "Gie" },
              "room": { "changed": false, "value": "S2.15" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 766,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "inf2" },
              "teacher": { "changed": false, "value": "Gie" },
              "room": { "changed": false, "value": "S2.15" },
              "schoolClass": "JG12",
              "info": null
            }
          ],
          "type": "room"
        },
        {
          "name": "S2.17",
          "plannedLessons": [
            {
              "id": 92,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "MU" },
              "teacher": { "changed": false, "value": "Scö" },
              "room": { "changed": false, "value": "S2.17" },
              "schoolClass": "6a",
              "info": null
            },
            {
              "id": 130,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "MU" },
              "teacher": { "changed": false, "value": "Gra" },
              "room": { "changed": false, "value": "S2.17" },
              "schoolClass": "7a",
              "info": null
            },
            {
              "id": 616,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "choM" },
              "teacher": { "changed": false, "value": "CHLM Paw" },
              "room": { "changed": false, "value": "S2.17" },
              "schoolClass": "8a",
              "info": null
            },
            {
              "id": 616,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "choM" },
              "teacher": { "changed": false, "value": "CHLM Paw" },
              "room": { "changed": false, "value": "S2.17" },
              "schoolClass": "8a",
              "info": null
            },
            {
              "id": 616,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "choM" },
              "teacher": { "changed": false, "value": "CHLM Paw" },
              "room": { "changed": false, "value": "S2.17" },
              "schoolClass": "9a",
              "info": null
            },
            {
              "id": 616,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "choM" },
              "teacher": { "changed": false, "value": "CHLM Paw" },
              "room": { "changed": false, "value": "S2.17" },
              "schoolClass": "9a",
              "info": null
            },
            {
              "id": 312,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "Leh" },
              "room": { "changed": false, "value": "S2.17" },
              "schoolClass": "9b",
              "info": null
            },
            {
              "id": 616,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "choM" },
              "teacher": { "changed": false, "value": "CHLM Paw" },
              "room": { "changed": false, "value": "S2.17" },
              "schoolClass": "10a",
              "info": null
            },
            {
              "id": 616,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "choM" },
              "teacher": { "changed": false, "value": "CHLM Paw" },
              "room": { "changed": false, "value": "S2.17" },
              "schoolClass": "10a",
              "info": null
            },
            {
              "id": 616,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "choM" },
              "teacher": { "changed": false, "value": "CHLM Paw" },
              "room": { "changed": false, "value": "S2.17" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 616,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "choM" },
              "teacher": { "changed": false, "value": "CHLM Paw" },
              "room": { "changed": false, "value": "S2.17" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 616,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "choM" },
              "teacher": { "changed": false, "value": "CHLM Paw" },
              "room": { "changed": false, "value": "S2.17" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 616,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "choM" },
              "teacher": { "changed": false, "value": "CHLM Paw" },
              "room": { "changed": false, "value": "S2.17" },
              "schoolClass": "JG12",
              "info": null
            }
          ],
          "type": "room"
        },
        {
          "name": "TH 1",
          "plannedLessons": [
            {
              "id": 474,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Ble" },
              "room": { "changed": false, "value": "TH 1" },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 474,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Ble" },
              "room": { "changed": false, "value": "TH 1" },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 474,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Ble" },
              "room": { "changed": false, "value": "TH 1" },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 474,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Ble" },
              "room": { "changed": false, "value": "TH 1" },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 474,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Ble" },
              "room": { "changed": false, "value": "TH 1" },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 474,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Ble" },
              "room": { "changed": false, "value": "TH 1" },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 474,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Ble" },
              "room": { "changed": false, "value": "TH 1" },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 474,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Ble" },
              "room": { "changed": false, "value": "TH 1" },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 248,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "SPw-8ac" },
              "teacher": { "changed": false, "value": "Göb Scn" },
              "room": { "changed": false, "value": "TH 1" },
              "schoolClass": "8a",
              "info": null
            },
            {
              "id": 248,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "SPw-8ac" },
              "teacher": { "changed": false, "value": "Göb Scn" },
              "room": { "changed": false, "value": "TH 1" },
              "schoolClass": "8a",
              "info": null
            },
            {
              "id": 269,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "SPm-8b" },
              "teacher": { "changed": false, "value": "Mel" },
              "room": { "changed": false, "value": "TH 1" },
              "schoolClass": "8b",
              "info": null
            },
            {
              "id": 248,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "SPw-8ac" },
              "teacher": { "changed": false, "value": "Göb Scn" },
              "room": { "changed": false, "value": "TH 1" },
              "schoolClass": "8c",
              "info": null
            },
            {
              "id": 248,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "SPw-8ac" },
              "teacher": { "changed": false, "value": "Göb Scn" },
              "room": { "changed": false, "value": "TH 1" },
              "schoolClass": "8c",
              "info": null
            },
            {
              "id": 353,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "SPw-9b" },
              "teacher": { "changed": false, "value": "Göb" },
              "room": { "changed": false, "value": "TH 1" },
              "schoolClass": "9b",
              "info": null
            }
          ],
          "type": "room"
        },
        {
          "name": "TH 2",
          "plannedLessons": [
            {
              "id": 792,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "HoM" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 792,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "HoM" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 792,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "HoM" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 792,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "HoM" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 792,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "HoM" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 792,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "HoM" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 792,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "HoM" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 792,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "HoM" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 792,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "HoM" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "6a",
              "info": null
            },
            {
              "id": 792,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "HoM" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "6a",
              "info": null
            },
            {
              "id": 792,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "HoM" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "6b",
              "info": null
            },
            {
              "id": 792,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "HoM" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "6b",
              "info": null
            },
            {
              "id": 200,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": true, "value": "SPO" },
              "teacher": { "changed": true, "value": "Mel" },
              "room": { "changed": true, "value": "TH 2" },
              "schoolClass": "7c",
              "info": "für FR Frau Lübke, Vertretung"
            },
            {
              "id": 200,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": true, "value": "SPO" },
              "teacher": { "changed": true, "value": "Mel" },
              "room": { "changed": true, "value": "TH 2" },
              "schoolClass": "7d",
              "info": "für FR Frau Lübke, Vertretung"
            },
            {
              "id": 249,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "SPm-8ac" },
              "teacher": { "changed": false, "value": "Mel" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "8a",
              "info": null
            },
            {
              "id": 249,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "SPm-8ac" },
              "teacher": { "changed": false, "value": "Mel" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "8a",
              "info": null
            },
            {
              "id": 233,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "SPw-8ab" },
              "teacher": { "changed": false, "value": "BoM" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "8a",
              "info": null
            },
            {
              "id": 233,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "SPw-8ab" },
              "teacher": { "changed": false, "value": "BoM" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "8b",
              "info": null
            },
            {
              "id": 249,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "SPm-8ac" },
              "teacher": { "changed": false, "value": "Mel" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "8c",
              "info": null
            },
            {
              "id": 249,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "SPm-8ac" },
              "teacher": { "changed": false, "value": "Mel" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "8c",
              "info": null
            }
          ],
          "type": "room"
        }
      ],
      "teachers": [
        {
          "name": "Bän",
          "plannedLessons": [
            {
              "id": 26,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "MU" },
              "teacher": { "changed": false, "value": "Bän" },
              "room": { "changed": false, "value": "S1.17" },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 883,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "Kla" },
              "teacher": { "changed": false, "value": "Bän" },
              "room": { "changed": false, "value": null },
              "schoolClass": "8 Kla",
              "info": null
            },
            {
              "id": 789,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Bän" },
              "room": { "changed": false, "value": "A0.16" },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 789,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Bän" },
              "room": { "changed": false, "value": "A0.16" },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 789,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Bän" },
              "room": { "changed": false, "value": "A0.16" },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 789,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Bän" },
              "room": { "changed": false, "value": "A0.16" },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 789,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Bän" },
              "room": { "changed": false, "value": "A0.16" },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 789,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Bän" },
              "room": { "changed": false, "value": "A0.16" },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 789,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Bän" },
              "room": { "changed": false, "value": "A0.16" },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 789,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Bän" },
              "room": { "changed": false, "value": "A0.16" },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 286,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "MU" },
              "teacher": { "changed": false, "value": "Bän" },
              "room": { "changed": false, "value": "E0.07" },
              "schoolClass": "8c",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Bet",
          "plannedLessons": [
            {
              "id": 43,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "EN" },
              "teacher": { "changed": false, "value": "Bet" },
              "room": { "changed": false, "value": "E2.07" },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 43,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "EN" },
              "teacher": { "changed": false, "value": "Bet" },
              "room": { "changed": false, "value": "E2.07" },
              "schoolClass": "5c",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Bis",
          "plannedLessons": [
            {
              "id": 791,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Bis" },
              "room": { "changed": true, "value": "S1.15" },
              "schoolClass": "5a",
              "info": "Raum geändert"
            },
            {
              "id": 791,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Bis" },
              "room": { "changed": true, "value": "S1.15" },
              "schoolClass": "5b",
              "info": "Raum geändert"
            },
            {
              "id": 791,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Bis" },
              "room": { "changed": true, "value": "S1.15" },
              "schoolClass": "5c",
              "info": "Raum geändert"
            },
            {
              "id": 791,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Bis" },
              "room": { "changed": true, "value": "S1.15" },
              "schoolClass": "5d",
              "info": "Raum geändert"
            },
            {
              "id": 791,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Bis" },
              "room": { "changed": true, "value": "S1.15" },
              "schoolClass": "5a",
              "info": "Raum geändert"
            },
            {
              "id": 791,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Bis" },
              "room": { "changed": true, "value": "S1.15" },
              "schoolClass": "5b",
              "info": "Raum geändert"
            },
            {
              "id": 791,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Bis" },
              "room": { "changed": true, "value": "S1.15" },
              "schoolClass": "5c",
              "info": "Raum geändert"
            },
            {
              "id": 791,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Bis" },
              "room": { "changed": true, "value": "S1.15" },
              "schoolClass": "5d",
              "info": "Raum geändert"
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Ble",
          "plannedLessons": [
            {
              "id": 474,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Ble" },
              "room": { "changed": false, "value": "TH 1" },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 474,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Ble" },
              "room": { "changed": false, "value": "TH 1" },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 474,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Ble" },
              "room": { "changed": false, "value": "TH 1" },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 474,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Ble" },
              "room": { "changed": false, "value": "TH 1" },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 474,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Ble" },
              "room": { "changed": false, "value": "TH 1" },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 474,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Ble" },
              "room": { "changed": false, "value": "TH 1" },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 474,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Ble" },
              "room": { "changed": false, "value": "TH 1" },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 474,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Ble" },
              "room": { "changed": false, "value": "TH 1" },
              "schoolClass": "5d",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "BoI",
          "plannedLessons": [
            {
              "id": 31,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "BoI" },
              "room": { "changed": false, "value": "E1.08" },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 78,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "BoI" },
              "room": { "changed": false, "value": "E0.07" },
              "schoolClass": "6a",
              "info": null
            },
            {
              "id": 454,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "ÖPR" },
              "teacher": { "changed": false, "value": "BoI Kra Scl" },
              "room": { "changed": false, "value": null },
              "schoolClass": "SOA",
              "info": null
            },
            {
              "id": 111,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "KOM" },
              "teacher": { "changed": false, "value": "BoI" },
              "room": { "changed": false, "value": "E0.07" },
              "schoolClass": "6a",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "BoM",
          "plannedLessons": [
            {
              "id": 476,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "BoM" },
              "room": { "changed": false, "value": "KUFA" },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 476,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "BoM" },
              "room": { "changed": false, "value": "KUFA" },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 476,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "BoM" },
              "room": { "changed": false, "value": "KUFA" },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 476,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "BoM" },
              "room": { "changed": false, "value": "KUFA" },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 476,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "BoM" },
              "room": { "changed": false, "value": "KUFA" },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 476,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "BoM" },
              "room": { "changed": false, "value": "KUFA" },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 476,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "BoM" },
              "room": { "changed": false, "value": "KUFA" },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 476,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "BoM" },
              "room": { "changed": false, "value": "KUFA" },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 233,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "SPw-8ab" },
              "teacher": { "changed": false, "value": "BoM" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "8a",
              "info": null
            },
            {
              "id": 233,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "SPw-8ab" },
              "teacher": { "changed": false, "value": "BoM" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "8b",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Bro",
          "plannedLessons": [
            {
              "id": 256,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "CH" },
              "teacher": { "changed": false, "value": "Bro" },
              "room": { "changed": false, "value": "E2.19" },
              "schoolClass": "8b",
              "info": null
            },
            {
              "id": 295,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "BIO" },
              "teacher": { "changed": false, "value": "Bro" },
              "room": { "changed": false, "value": "E0.19" },
              "schoolClass": "9a",
              "info": null
            },
            {
              "id": 228,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "CH" },
              "teacher": { "changed": false, "value": "Bro" },
              "room": { "changed": false, "value": "E2.19" },
              "schoolClass": "8a",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Bru",
          "plannedLessons": [
            {
              "id": 302,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "RE/e-st9" },
              "teacher": { "changed": false, "value": "Bru" },
              "room": { "changed": false, "value": "E1.13" },
              "schoolClass": "9a",
              "info": null
            },
            {
              "id": 302,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "RE/e-st9" },
              "teacher": { "changed": false, "value": "Bru" },
              "room": { "changed": false, "value": "E1.13" },
              "schoolClass": "9b",
              "info": null
            },
            {
              "id": 302,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "RE/e-st9" },
              "teacher": { "changed": false, "value": "Bru" },
              "room": { "changed": false, "value": "E1.13" },
              "schoolClass": "9c",
              "info": null
            },
            {
              "id": 599,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "LRS" },
              "teacher": { "changed": false, "value": "Bru" },
              "room": { "changed": false, "value": "E1.13" },
              "schoolClass": "7b",
              "info": null
            },
            {
              "id": 599,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "LRS" },
              "teacher": { "changed": false, "value": "Bru" },
              "room": { "changed": false, "value": "E1.13" },
              "schoolClass": "7c",
              "info": null
            },
            {
              "id": 599,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "LRS" },
              "teacher": { "changed": false, "value": "Bru" },
              "room": { "changed": false, "value": "E1.13" },
              "schoolClass": "7d",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Bue",
          "plannedLessons": [
            {
              "id": 804,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "DAZ" },
              "teacher": { "changed": false, "value": "Bue" },
              "room": { "changed": false, "value": null },
              "schoolClass": "DAZ",
              "info": null
            },
            {
              "id": 804,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "DAZ" },
              "teacher": { "changed": false, "value": "Bue" },
              "room": { "changed": false, "value": null },
              "schoolClass": "DAZ",
              "info": null
            },
            {
              "id": 804,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "DAZ" },
              "teacher": { "changed": false, "value": "Bue" },
              "room": { "changed": false, "value": null },
              "schoolClass": "DAZ",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "CHLJ",
          "plannedLessons": [
            {
              "id": 615,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "choJ" },
              "teacher": { "changed": false, "value": "CHLJ Scö" },
              "room": { "changed": false, "value": null },
              "schoolClass": "8a",
              "info": null
            },
            {
              "id": 615,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "choJ" },
              "teacher": { "changed": false, "value": "CHLJ Scö" },
              "room": { "changed": false, "value": null },
              "schoolClass": "9a",
              "info": null
            },
            {
              "id": 615,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "choJ" },
              "teacher": { "changed": false, "value": "CHLJ Scö" },
              "room": { "changed": false, "value": null },
              "schoolClass": "10a",
              "info": null
            },
            {
              "id": 615,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "choJ" },
              "teacher": { "changed": false, "value": "CHLJ Scö" },
              "room": { "changed": false, "value": null },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 615,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "choJ" },
              "teacher": { "changed": false, "value": "CHLJ Scö" },
              "room": { "changed": false, "value": null },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 615,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "choJ" },
              "teacher": { "changed": false, "value": "CHLJ Scö" },
              "room": { "changed": false, "value": null },
              "schoolClass": "8a",
              "info": null
            },
            {
              "id": 615,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "choJ" },
              "teacher": { "changed": false, "value": "CHLJ Scö" },
              "room": { "changed": false, "value": null },
              "schoolClass": "9a",
              "info": null
            },
            {
              "id": 615,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "choJ" },
              "teacher": { "changed": false, "value": "CHLJ Scö" },
              "room": { "changed": false, "value": null },
              "schoolClass": "10a",
              "info": null
            },
            {
              "id": 615,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "choJ" },
              "teacher": { "changed": false, "value": "CHLJ Scö" },
              "room": { "changed": false, "value": null },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 615,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "choJ" },
              "teacher": { "changed": false, "value": "CHLJ Scö" },
              "room": { "changed": false, "value": null },
              "schoolClass": "JG12",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "CHLM",
          "plannedLessons": [
            {
              "id": 616,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "choM" },
              "teacher": { "changed": false, "value": "CHLM Paw" },
              "room": { "changed": false, "value": "S2.17" },
              "schoolClass": "8a",
              "info": null
            },
            {
              "id": 616,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "choM" },
              "teacher": { "changed": false, "value": "CHLM Paw" },
              "room": { "changed": false, "value": "S2.17" },
              "schoolClass": "9a",
              "info": null
            },
            {
              "id": 616,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "choM" },
              "teacher": { "changed": false, "value": "CHLM Paw" },
              "room": { "changed": false, "value": "S2.17" },
              "schoolClass": "10a",
              "info": null
            },
            {
              "id": 616,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "choM" },
              "teacher": { "changed": false, "value": "CHLM Paw" },
              "room": { "changed": false, "value": "S2.17" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 616,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "choM" },
              "teacher": { "changed": false, "value": "CHLM Paw" },
              "room": { "changed": false, "value": "S2.17" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 616,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "choM" },
              "teacher": { "changed": false, "value": "CHLM Paw" },
              "room": { "changed": false, "value": "S2.17" },
              "schoolClass": "8a",
              "info": null
            },
            {
              "id": 616,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "choM" },
              "teacher": { "changed": false, "value": "CHLM Paw" },
              "room": { "changed": false, "value": "S2.17" },
              "schoolClass": "9a",
              "info": null
            },
            {
              "id": 616,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "choM" },
              "teacher": { "changed": false, "value": "CHLM Paw" },
              "room": { "changed": false, "value": "S2.17" },
              "schoolClass": "10a",
              "info": null
            },
            {
              "id": 616,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "choM" },
              "teacher": { "changed": false, "value": "CHLM Paw" },
              "room": { "changed": false, "value": "S2.17" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 616,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "choM" },
              "teacher": { "changed": false, "value": "CHLM Paw" },
              "room": { "changed": false, "value": "S2.17" },
              "schoolClass": "JG12",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Das",
          "plannedLessons": [
            {
              "id": 164,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Das" },
              "room": { "changed": false, "value": "E1.12" },
              "schoolClass": "7c",
              "info": null
            },
            {
              "id": 164,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Das" },
              "room": { "changed": false, "value": "E1.12" },
              "schoolClass": "7c",
              "info": null
            },
            {
              "id": 586,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "Ref." },
              "teacher": { "changed": false, "value": "Das Zsc" },
              "room": { "changed": false, "value": null },
              "schoolClass": "REF",
              "info": null
            },
            {
              "id": 603,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "CH1" },
              "teacher": { "changed": false, "value": "Das" },
              "room": { "changed": false, "value": "E2.18" },
              "schoolClass": "JG11",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Din",
          "plannedLessons": [
            {
              "id": 271,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "EN" },
              "teacher": { "changed": false, "value": "Din" },
              "room": { "changed": false, "value": "E2.15" },
              "schoolClass": "8c",
              "info": null
            },
            {
              "id": 605,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "EN2" },
              "teacher": { "changed": false, "value": "Din" },
              "room": { "changed": false, "value": "E2.12" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 291,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "EN" },
              "teacher": { "changed": false, "value": "Din" },
              "room": { "changed": false, "value": "E2.12" },
              "schoolClass": "9a",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Dom",
          "plannedLessons": [
            {
              "id": 404,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Dom" },
              "room": { "changed": false, "value": "S1.14" },
              "schoolClass": "10c",
              "info": null
            },
            {
              "id": 404,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Dom" },
              "room": { "changed": false, "value": "S1.14" },
              "schoolClass": "10c",
              "info": null
            },
            {
              "id": 730,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "MA1" },
              "teacher": { "changed": false, "value": "Dom" },
              "room": { "changed": false, "value": "S1.14" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 730,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "MA1" },
              "teacher": { "changed": false, "value": "Dom" },
              "room": { "changed": false, "value": "S1.14" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 254,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Dom Zsc" },
              "room": { "changed": false, "value": "E2.08" },
              "schoolClass": "8b",
              "info": null
            },
            {
              "id": 587,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "Ref." },
              "teacher": { "changed": false, "value": "Dom Zsc" },
              "room": { "changed": false, "value": null },
              "schoolClass": "REF",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Gie",
          "plannedLessons": [
            {
              "id": "209+",
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "INF" },
              "teacher": { "changed": false, "value": "Gie" },
              "room": { "changed": true, "value": "S2.15" },
              "schoolClass": "7e",
              "info": "gesamte Klasse 7e, Raum geändert"
            },
            {
              "id": 267,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "INF-8b-2" },
              "teacher": { "changed": false, "value": "Gie" },
              "room": { "changed": false, "value": "S2.13" },
              "schoolClass": "8b",
              "info": null
            },
            {
              "id": 766,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "inf2" },
              "teacher": { "changed": false, "value": "Gie" },
              "room": { "changed": false, "value": "S2.15" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 766,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "inf2" },
              "teacher": { "changed": false, "value": "Gie" },
              "room": { "changed": false, "value": "S2.15" },
              "schoolClass": "JG12",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Gla",
          "plannedLessons": [
            {
              "id": 607,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "PH1" },
              "teacher": { "changed": false, "value": "Gla" },
              "room": { "changed": false, "value": "E1.18" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 118,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Gla" },
              "room": { "changed": false, "value": "E0.12" },
              "schoolClass": "7a",
              "info": null
            },
            {
              "id": 66,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Gla" },
              "room": { "changed": false, "value": "E2.08" },
              "schoolClass": "5d",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Göb",
          "plannedLessons": [
            {
              "id": 248,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "SPw-8ac" },
              "teacher": { "changed": false, "value": "Göb Scn" },
              "room": { "changed": false, "value": "TH 1" },
              "schoolClass": "8a",
              "info": null
            },
            {
              "id": 248,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "SPw-8ac" },
              "teacher": { "changed": false, "value": "Göb Scn" },
              "room": { "changed": false, "value": "TH 1" },
              "schoolClass": "8c",
              "info": null
            },
            {
              "id": 248,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "SPw-8ac" },
              "teacher": { "changed": false, "value": "Göb Scn" },
              "room": { "changed": false, "value": "TH 1" },
              "schoolClass": "8a",
              "info": null
            },
            {
              "id": 248,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "SPw-8ac" },
              "teacher": { "changed": false, "value": "Göb Scn" },
              "room": { "changed": false, "value": "TH 1" },
              "schoolClass": "8c",
              "info": null
            },
            {
              "id": 353,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "SPw-9b" },
              "teacher": { "changed": false, "value": "Göb" },
              "room": { "changed": false, "value": "TH 1" },
              "schoolClass": "9b",
              "info": null
            },
            {
              "id": 604,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "EN1" },
              "teacher": { "changed": false, "value": "Göb" },
              "room": { "changed": false, "value": "E2.08" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 721,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "AG V" },
              "teacher": { "changed": false, "value": "Göb" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 721,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "AG V" },
              "teacher": { "changed": false, "value": "Göb" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 721,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "AG V" },
              "teacher": { "changed": false, "value": "Göb" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 721,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "AG V" },
              "teacher": { "changed": false, "value": "Göb" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 721,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "AG V" },
              "teacher": { "changed": false, "value": "Göb" },
              "room": { "changed": false, "value": null },
              "schoolClass": "6b",
              "info": null
            },
            {
              "id": 721,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "AG V" },
              "teacher": { "changed": false, "value": "Göb" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 721,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "AG V" },
              "teacher": { "changed": false, "value": "Göb" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 721,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "AG V" },
              "teacher": { "changed": false, "value": "Göb" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 721,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "AG V" },
              "teacher": { "changed": false, "value": "Göb" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 721,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "AG V" },
              "teacher": { "changed": false, "value": "Göb" },
              "room": { "changed": false, "value": null },
              "schoolClass": "6b",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Gra",
          "plannedLessons": [
            {
              "id": 871,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "Kla" },
              "teacher": { "changed": false, "value": "Gra" },
              "room": { "changed": false, "value": null },
              "schoolClass": "11 Kl",
              "info": null
            },
            {
              "id": 130,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "MU" },
              "teacher": { "changed": false, "value": "Gra" },
              "room": { "changed": false, "value": "S2.17" },
              "schoolClass": "7a",
              "info": null
            },
            {
              "id": 872,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kla" },
              "teacher": { "changed": false, "value": "Gra" },
              "room": { "changed": false, "value": null },
              "schoolClass": "12 Kl",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Gün",
          "plannedLessons": [
            {
              "id": 374,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "PH" },
              "teacher": { "changed": false, "value": "Gün" },
              "room": { "changed": false, "value": "E1.18" },
              "schoolClass": "10a",
              "info": null
            },
            {
              "id": 361,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "PH" },
              "teacher": { "changed": false, "value": "Gün" },
              "room": { "changed": false, "value": "E1.18" },
              "schoolClass": "10a",
              "info": null
            },
            {
              "id": 167,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "PH" },
              "teacher": { "changed": false, "value": "Gün" },
              "room": { "changed": false, "value": "E1.19" },
              "schoolClass": "7c",
              "info": null
            },
            {
              "id": 382,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Gün" },
              "room": { "changed": false, "value": "E1.15" },
              "schoolClass": "10b",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Hän",
          "plannedLessons": [
            {
              "id": 455,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "OSB" },
              "teacher": { "changed": false, "value": "Hän Kön" },
              "room": { "changed": false, "value": null },
              "schoolClass": "SOA",
              "info": null
            },
            {
              "id": 455,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "OSB" },
              "teacher": { "changed": false, "value": "Hän Kön" },
              "room": { "changed": false, "value": null },
              "schoolClass": "SOA",
              "info": null
            },
            {
              "id": 624,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "de1" },
              "teacher": { "changed": false, "value": "Hän" },
              "room": { "changed": false, "value": "E1.14" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 624,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "de1" },
              "teacher": { "changed": false, "value": "Hän" },
              "room": { "changed": false, "value": "E1.14" },
              "schoolClass": "JG11",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "HoK",
          "plannedLessons": [
            {
              "id": 11,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "BIO" },
              "teacher": { "changed": false, "value": "HoK" },
              "room": { "changed": false, "value": "E0.18" },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 640,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "bio2" },
              "teacher": { "changed": false, "value": "HoK" },
              "room": { "changed": false, "value": "E0.18" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 640,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "bio2" },
              "teacher": { "changed": false, "value": "HoK" },
              "room": { "changed": false, "value": "E0.18" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 426,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "BIO" },
              "teacher": { "changed": false, "value": "HoK" },
              "room": { "changed": false, "value": "E0.18" },
              "schoolClass": "10d",
              "info": null
            },
            {
              "id": 405,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "BIO" },
              "teacher": { "changed": false, "value": "HoK" },
              "room": { "changed": false, "value": "E0.18" },
              "schoolClass": "10c",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Höl",
          "plannedLessons": [
            {
              "id": 728,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "DE1" },
              "teacher": { "changed": false, "value": "Höl" },
              "room": { "changed": false, "value": "S1.17" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 728,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "DE1" },
              "teacher": { "changed": false, "value": "Höl" },
              "room": { "changed": false, "value": "S1.17" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 176,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "MU" },
              "teacher": { "changed": false, "value": "Höl" },
              "room": { "changed": false, "value": "S1.17" },
              "schoolClass": "7c",
              "info": null
            },
            {
              "id": 114,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "Höl" },
              "room": { "changed": false, "value": "S1.17" },
              "schoolClass": "7a",
              "info": null
            },
            {
              "id": 756,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "mu1" },
              "teacher": { "changed": false, "value": "Höl" },
              "room": { "changed": false, "value": "S1.17" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 756,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "mu1" },
              "teacher": { "changed": false, "value": "Höl" },
              "room": { "changed": false, "value": "S1.17" },
              "schoolClass": "JG12",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "HoM",
          "plannedLessons": [
            {
              "id": 792,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "HoM" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 792,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "HoM" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 792,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "HoM" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 792,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "HoM" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 792,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "HoM" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "6a",
              "info": null
            },
            {
              "id": 792,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "HoM" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "6b",
              "info": null
            },
            {
              "id": 792,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "HoM" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 792,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "HoM" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 792,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "HoM" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 792,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "HoM" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 792,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "HoM" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "6a",
              "info": null
            },
            {
              "id": 792,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "HoM" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "6b",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Kie",
          "plannedLessons": [
            {
              "id": 387,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "GRW" },
              "teacher": { "changed": false, "value": "Kie" },
              "room": { "changed": false, "value": "E1.15" },
              "schoolClass": "10b",
              "info": null
            },
            {
              "id": 320,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "GE" },
              "teacher": { "changed": false, "value": "Kie" },
              "room": { "changed": false, "value": "E1.15" },
              "schoolClass": "9b",
              "info": null
            },
            {
              "id": 142,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "GRW" },
              "teacher": { "changed": false, "value": "Kie" },
              "room": { "changed": false, "value": "E1.15" },
              "schoolClass": "7b",
              "info": null
            },
            {
              "id": 221,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "GRW" },
              "teacher": { "changed": false, "value": "Kie" },
              "room": { "changed": false, "value": "E2.14" },
              "schoolClass": "7e",
              "info": null
            },
            {
              "id": 459,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "LA-10bd" },
              "teacher": { "changed": false, "value": "Kie" },
              "room": { "changed": false, "value": "E2.14" },
              "schoolClass": "10b",
              "info": null
            },
            {
              "id": 459,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "LA-10bd" },
              "teacher": { "changed": false, "value": "Kie" },
              "room": { "changed": false, "value": "E2.14" },
              "schoolClass": "10d",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Kle",
          "plannedLessons": [
            {
              "id": 79,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "EN" },
              "teacher": { "changed": false, "value": "Kle" },
              "room": { "changed": false, "value": "E0.07" },
              "schoolClass": "6a",
              "info": null
            },
            {
              "id": 401,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "EN" },
              "teacher": { "changed": false, "value": "Kle" },
              "room": { "changed": false, "value": "E2.09" },
              "schoolClass": "10c",
              "info": null
            },
            {
              "id": 25,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "EN" },
              "teacher": { "changed": false, "value": "Kle" },
              "room": { "changed": false, "value": "E1.08" },
              "schoolClass": "5b",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Koc",
          "plannedLessons": [
            {
              "id": 639,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "ast1" },
              "teacher": { "changed": false, "value": "Koc" },
              "room": { "changed": false, "value": "S2.12" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 639,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "ast1" },
              "teacher": { "changed": false, "value": "Koc" },
              "room": { "changed": false, "value": "S2.12" },
              "schoolClass": "JG11",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Kok",
          "plannedLessons": [
            {
              "id": 140,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "PH" },
              "teacher": { "changed": false, "value": "Kok" },
              "room": { "changed": false, "value": "E1.18" },
              "schoolClass": "7b",
              "info": null
            },
            {
              "id": 7,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Kok" },
              "room": { "changed": false, "value": "E1.07" },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 30,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Kok" },
              "room": { "changed": false, "value": "E1.08" },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 216,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Kok" },
              "room": { "changed": false, "value": "E0.08" },
              "schoolClass": "7e",
              "info": null
            },
            {
              "id": 767,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "ph1" },
              "teacher": { "changed": false, "value": "Kok" },
              "room": { "changed": false, "value": "E1.18" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 767,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "ph1" },
              "teacher": { "changed": false, "value": "Kok" },
              "room": { "changed": false, "value": "E1.18" },
              "schoolClass": "JG12",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Kön",
          "plannedLessons": [
            {
              "id": 369,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "KU" },
              "teacher": { "changed": false, "value": "Kön" },
              "room": { "changed": false, "value": "M1.05" },
              "schoolClass": "10a",
              "info": null
            },
            {
              "id": 455,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "OSB" },
              "teacher": { "changed": false, "value": "Hän Kön" },
              "room": { "changed": false, "value": null },
              "schoolClass": "SOA",
              "info": null
            },
            {
              "id": 455,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "OSB" },
              "teacher": { "changed": false, "value": "Hän Kön" },
              "room": { "changed": false, "value": null },
              "schoolClass": "SOA",
              "info": null
            },
            {
              "id": 232,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "GEO" },
              "teacher": { "changed": false, "value": "Kön" },
              "room": { "changed": false, "value": "E0.12" },
              "schoolClass": "8a",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Kra",
          "plannedLessons": [
            {
              "id": 80,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "FR" },
              "teacher": { "changed": false, "value": "Kra" },
              "room": { "changed": false, "value": "E2.13" },
              "schoolClass": "6a",
              "info": null
            },
            {
              "id": 335,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "FR-9c" },
              "teacher": { "changed": false, "value": "Kra" },
              "room": { "changed": false, "value": "E2.13" },
              "schoolClass": "9c",
              "info": null
            },
            {
              "id": 116,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "FR-7a-7c" },
              "teacher": { "changed": false, "value": "Kra" },
              "room": { "changed": false, "value": "E2.13" },
              "schoolClass": "7a",
              "info": null
            },
            {
              "id": 116,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "FR-7a-7c" },
              "teacher": { "changed": false, "value": "Kra" },
              "room": { "changed": false, "value": "E2.13" },
              "schoolClass": "7c",
              "info": null
            },
            {
              "id": 454,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "ÖPR" },
              "teacher": { "changed": false, "value": "BoI Kra Scl" },
              "room": { "changed": false, "value": null },
              "schoolClass": "SOA",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Kue",
          "plannedLessons": [
            {
              "id": 475,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Kue" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 475,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Kue" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 475,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Kue" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 475,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Kue" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 475,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Kue" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 475,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Kue" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 475,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Kue" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 475,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Kue" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5d",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Küh",
          "plannedLessons": [
            {
              "id": 163,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "Ru-7cde" },
              "teacher": { "changed": false, "value": "Küh" },
              "room": { "changed": false, "value": "E1.12" },
              "schoolClass": "7c",
              "info": null
            },
            {
              "id": 163,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "Ru-7cde" },
              "teacher": { "changed": false, "value": "Küh" },
              "room": { "changed": false, "value": "E1.12" },
              "schoolClass": "7d",
              "info": null
            },
            {
              "id": 163,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "Ru-7cde" },
              "teacher": { "changed": false, "value": "Küh" },
              "room": { "changed": false, "value": "E1.12" },
              "schoolClass": "7e",
              "info": null
            },
            {
              "id": 482,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Küh" },
              "room": { "changed": false, "value": "E2.16" },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 482,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Küh" },
              "room": { "changed": false, "value": "E2.16" },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 482,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Küh" },
              "room": { "changed": false, "value": "E2.16" },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 482,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Küh" },
              "room": { "changed": false, "value": "E2.16" },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 482,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Küh" },
              "room": { "changed": false, "value": "E2.16" },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 482,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Küh" },
              "room": { "changed": false, "value": "E2.16" },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 482,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Küh" },
              "room": { "changed": false, "value": "E2.16" },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 482,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Küh" },
              "room": { "changed": false, "value": "E2.16" },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 886,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "SOR" },
              "teacher": { "changed": false, "value": "Küh" },
              "room": { "changed": false, "value": null },
              "schoolClass": "9a",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Kus",
          "plannedLessons": [
            {
              "id": 821,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "Stibi" },
              "teacher": { "changed": false, "value": "Kus" },
              "room": { "changed": false, "value": null },
              "schoolClass": "12 St",
              "info": null
            },
            {
              "id": 755,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "choM" },
              "teacher": { "changed": false, "value": "Kus" },
              "room": { "changed": false, "value": "S1.15" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 755,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "choM" },
              "teacher": { "changed": false, "value": "Kus" },
              "room": { "changed": false, "value": "S1.15" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 832,
              "order": 9,
              "startTime": "2024-09-02T13:10:00.000Z",
              "endTime": "2024-09-02T13:55:00.000Z",
              "subject": { "changed": false, "value": "Stibi" },
              "teacher": { "changed": false, "value": "Kus" },
              "room": { "changed": false, "value": null },
              "schoolClass": "11 St",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Leh",
          "plannedLessons": [
            {
              "id": 333,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "Leh" },
              "room": { "changed": false, "value": "E2.09" },
              "schoolClass": "9c",
              "info": null
            },
            {
              "id": 212,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "Leh" },
              "room": { "changed": false, "value": "E2.09" },
              "schoolClass": "7e",
              "info": null
            },
            {
              "id": 606,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "GE1" },
              "teacher": { "changed": false, "value": "Leh" },
              "room": { "changed": false, "value": "E1.14" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 312,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "Leh" },
              "room": { "changed": false, "value": "S2.17" },
              "schoolClass": "9b",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Len",
          "plannedLessons": [
            {
              "id": 192,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "GRW" },
              "teacher": { "changed": false, "value": "Len" },
              "room": { "changed": false, "value": "E1.14" },
              "schoolClass": "7d",
              "info": null
            },
            {
              "id": 222,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "Len" },
              "room": { "changed": false, "value": "E2.14" },
              "schoolClass": "8a",
              "info": null
            },
            {
              "id": 400,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "Len" },
              "room": { "changed": false, "value": "E2.15" },
              "schoolClass": "10c",
              "info": null
            },
            {
              "id": 279,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "GRW" },
              "teacher": { "changed": false, "value": "Len" },
              "room": { "changed": false, "value": "E0.08" },
              "schoolClass": "8c",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Lie",
          "plannedLessons": [
            {
              "id": 754,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "choJ" },
              "teacher": { "changed": false, "value": "Lie" },
              "room": { "changed": false, "value": "Aula" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 754,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "choJ" },
              "teacher": { "changed": false, "value": "Lie" },
              "room": { "changed": false, "value": "Aula" },
              "schoolClass": "JG12",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Lien",
          "plannedLessons": [
            {
              "id": 23,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Lien" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 23,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Lien" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 23,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Lien" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 23,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Lien" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 23,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Lien" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 23,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Lien" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 23,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Lien" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 23,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Lien" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5d",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Lin",
          "plannedLessons": [
            {
              "id": 103,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "GEO" },
              "teacher": { "changed": false, "value": "Lin" },
              "room": { "changed": false, "value": "E0.12" },
              "schoolClass": "6b",
              "info": null
            },
            {
              "id": 641,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "geo2" },
              "teacher": { "changed": false, "value": "Lin" },
              "room": { "changed": false, "value": "E0.12" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 641,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "geo2" },
              "teacher": { "changed": false, "value": "Lin" },
              "room": { "changed": false, "value": "E0.12" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 250,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "Lin" },
              "room": { "changed": false, "value": "E2.14" },
              "schoolClass": "8b",
              "info": null
            },
            {
              "id": 183,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "Lin" },
              "room": { "changed": false, "value": "A0.09" },
              "schoolClass": "7d",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Mar",
          "plannedLessons": [
            {
              "id": 71,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "GE" },
              "teacher": { "changed": false, "value": "Mar" },
              "room": { "changed": false, "value": "E0.14" },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 193,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "GEO" },
              "teacher": { "changed": false, "value": "Mar" },
              "room": { "changed": false, "value": "E0.14" },
              "schoolClass": "7d",
              "info": null
            },
            {
              "id": 410,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "GEO" },
              "teacher": { "changed": false, "value": "Mar" },
              "room": { "changed": false, "value": "E0.14" },
              "schoolClass": "10c",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Mel",
          "plannedLessons": [
            {
              "id": 249,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "SPm-8ac" },
              "teacher": { "changed": false, "value": "Mel" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "8a",
              "info": null
            },
            {
              "id": 249,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "SPm-8ac" },
              "teacher": { "changed": false, "value": "Mel" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "8c",
              "info": null
            },
            {
              "id": 249,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "SPm-8ac" },
              "teacher": { "changed": false, "value": "Mel" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "8a",
              "info": null
            },
            {
              "id": 249,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "SPm-8ac" },
              "teacher": { "changed": false, "value": "Mel" },
              "room": { "changed": false, "value": "TH 2" },
              "schoolClass": "8c",
              "info": null
            },
            {
              "id": 200,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": true, "value": "SPO" },
              "teacher": { "changed": true, "value": "Mel" },
              "room": { "changed": true, "value": "TH 2" },
              "schoolClass": "7c",
              "info": "für FR Frau Lübke, Vertretung"
            },
            {
              "id": 200,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": true, "value": "SPO" },
              "teacher": { "changed": true, "value": "Mel" },
              "room": { "changed": true, "value": "TH 2" },
              "schoolClass": "7d",
              "info": "für FR Frau Lübke, Vertretung"
            },
            {
              "id": 203,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "GEO" },
              "teacher": { "changed": false, "value": "Mel" },
              "room": { "changed": false, "value": "E0.09" },
              "schoolClass": "7e",
              "info": null
            },
            {
              "id": 269,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "SPm-8b" },
              "teacher": { "changed": false, "value": "Mel" },
              "room": { "changed": false, "value": "TH 1" },
              "schoolClass": "8b",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Men",
          "plannedLessons": [
            {
              "id": 133,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "Men" },
              "room": { "changed": false, "value": "E0.07" },
              "schoolClass": "7b",
              "info": null
            },
            {
              "id": 625,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "de2" },
              "teacher": { "changed": false, "value": "Men" },
              "room": { "changed": false, "value": "E2.15" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 625,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "de2" },
              "teacher": { "changed": false, "value": "Men" },
              "room": { "changed": false, "value": "E2.15" },
              "schoolClass": "JG11",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Met",
          "plannedLessons": [
            {
              "id": 427,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "CH" },
              "teacher": { "changed": false, "value": "Met" },
              "room": { "changed": false, "value": "E2.18" },
              "schoolClass": "10d",
              "info": null
            },
            {
              "id": 427,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "CH" },
              "teacher": { "changed": false, "value": "Met" },
              "room": { "changed": false, "value": "E2.18" },
              "schoolClass": "10d",
              "info": null
            },
            {
              "id": 360,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "CH" },
              "teacher": { "changed": false, "value": "Met" },
              "room": { "changed": false, "value": "E2.19" },
              "schoolClass": "10a",
              "info": null
            },
            {
              "id": 373,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "CH" },
              "teacher": { "changed": false, "value": "Met" },
              "room": { "changed": false, "value": "E2.19" },
              "schoolClass": "10a",
              "info": null
            },
            {
              "id": 765,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "bio3" },
              "teacher": { "changed": false, "value": "Met" },
              "room": { "changed": false, "value": "E0.19" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 765,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "bio3" },
              "teacher": { "changed": false, "value": "Met" },
              "room": { "changed": false, "value": "E0.19" },
              "schoolClass": "JG12",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Mic",
          "plannedLessons": [
            {
              "id": 585,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "ÖPR" },
              "teacher": { "changed": false, "value": "Pol Shr Mic" },
              "room": { "changed": false, "value": null },
              "schoolClass": "SOA",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Pau",
          "plannedLessons": [
            {
              "id": 258,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "GE" },
              "teacher": { "changed": false, "value": "Pau" },
              "room": { "changed": false, "value": "E2.12" },
              "schoolClass": "8b",
              "info": null
            },
            {
              "id": 729,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "DE3" },
              "teacher": { "changed": false, "value": "Pau" },
              "room": { "changed": false, "value": "E0.09" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 729,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "DE3" },
              "teacher": { "changed": false, "value": "Pau" },
              "room": { "changed": false, "value": "E0.09" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 362,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "GE" },
              "teacher": { "changed": false, "value": "Pau" },
              "room": { "changed": false, "value": "E2.07" },
              "schoolClass": "10a",
              "info": null
            },
            {
              "id": 8,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "Pau" },
              "room": { "changed": false, "value": "E1.07" },
              "schoolClass": "5a",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Paw",
          "plannedLessons": [
            {
              "id": 477,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Paw" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 477,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Paw" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 477,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Paw" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 477,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Paw" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 477,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Paw" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 477,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Paw" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 477,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Paw" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 477,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Paw" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 44,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "MU" },
              "teacher": { "changed": false, "value": "Paw" },
              "room": { "changed": false, "value": "A0.09" },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 616,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "choM" },
              "teacher": { "changed": false, "value": "CHLM Paw" },
              "room": { "changed": false, "value": "S2.17" },
              "schoolClass": "8a",
              "info": null
            },
            {
              "id": 616,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "choM" },
              "teacher": { "changed": false, "value": "CHLM Paw" },
              "room": { "changed": false, "value": "S2.17" },
              "schoolClass": "9a",
              "info": null
            },
            {
              "id": 616,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "choM" },
              "teacher": { "changed": false, "value": "CHLM Paw" },
              "room": { "changed": false, "value": "S2.17" },
              "schoolClass": "10a",
              "info": null
            },
            {
              "id": 616,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "choM" },
              "teacher": { "changed": false, "value": "CHLM Paw" },
              "room": { "changed": false, "value": "S2.17" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 616,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "choM" },
              "teacher": { "changed": false, "value": "CHLM Paw" },
              "room": { "changed": false, "value": "S2.17" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 616,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "choM" },
              "teacher": { "changed": false, "value": "CHLM Paw" },
              "room": { "changed": false, "value": "S2.17" },
              "schoolClass": "8a",
              "info": null
            },
            {
              "id": 616,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "choM" },
              "teacher": { "changed": false, "value": "CHLM Paw" },
              "room": { "changed": false, "value": "S2.17" },
              "schoolClass": "9a",
              "info": null
            },
            {
              "id": 616,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "choM" },
              "teacher": { "changed": false, "value": "CHLM Paw" },
              "room": { "changed": false, "value": "S2.17" },
              "schoolClass": "10a",
              "info": null
            },
            {
              "id": 616,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "choM" },
              "teacher": { "changed": false, "value": "CHLM Paw" },
              "room": { "changed": false, "value": "S2.17" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 616,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "choM" },
              "teacher": { "changed": false, "value": "CHLM Paw" },
              "room": { "changed": false, "value": "S2.17" },
              "schoolClass": "JG12",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Pol",
          "plannedLessons": [
            {
              "id": 386,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "GE" },
              "teacher": { "changed": false, "value": "Pol" },
              "room": { "changed": false, "value": "M1.05" },
              "schoolClass": "10b",
              "info": null
            },
            {
              "id": 429,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "GE" },
              "teacher": { "changed": false, "value": "Pol" },
              "room": { "changed": false, "value": "M1.05" },
              "schoolClass": "10d",
              "info": null
            },
            {
              "id": 585,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "ÖPR" },
              "teacher": { "changed": false, "value": "Pol Shr Mic" },
              "room": { "changed": false, "value": null },
              "schoolClass": "SOA",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Sca",
          "plannedLessons": [
            {
              "id": 191,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "GE" },
              "teacher": { "changed": false, "value": "Sca" },
              "room": { "changed": false, "value": "M1.08" },
              "schoolClass": "7d",
              "info": null
            },
            {
              "id": 857,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "Kla" },
              "teacher": { "changed": false, "value": "Sca" },
              "room": { "changed": false, "value": null },
              "schoolClass": "8 Kla",
              "info": null
            },
            {
              "id": 617,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "ens2" },
              "teacher": { "changed": false, "value": "Sca" },
              "room": { "changed": false, "value": "A0.09" },
              "schoolClass": "8a",
              "info": null
            },
            {
              "id": 617,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "ens2" },
              "teacher": { "changed": false, "value": "Sca" },
              "room": { "changed": false, "value": "A0.09" },
              "schoolClass": "9a",
              "info": null
            },
            {
              "id": 617,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "ens2" },
              "teacher": { "changed": false, "value": "Sca" },
              "room": { "changed": false, "value": "A0.09" },
              "schoolClass": "10a",
              "info": null
            },
            {
              "id": 617,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "ens2" },
              "teacher": { "changed": false, "value": "Sca" },
              "room": { "changed": false, "value": "A0.09" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 617,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "ens2" },
              "teacher": { "changed": false, "value": "Sca" },
              "room": { "changed": false, "value": "A0.09" },
              "schoolClass": "8a",
              "info": null
            },
            {
              "id": 617,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "ens2" },
              "teacher": { "changed": false, "value": "Sca" },
              "room": { "changed": false, "value": "A0.09" },
              "schoolClass": "9a",
              "info": null
            },
            {
              "id": 617,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "ens2" },
              "teacher": { "changed": false, "value": "Sca" },
              "room": { "changed": false, "value": "A0.09" },
              "schoolClass": "10a",
              "info": null
            },
            {
              "id": 617,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "ens2" },
              "teacher": { "changed": false, "value": "Sca" },
              "room": { "changed": false, "value": "A0.09" },
              "schoolClass": "JG11",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Scg",
          "plannedLessons": [
            {
              "id": 316,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Scg" },
              "room": { "changed": false, "value": "E1.15" },
              "schoolClass": "9b",
              "info": null
            },
            {
              "id": 425,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Scg Scn" },
              "room": { "changed": false, "value": "E1.14" },
              "schoolClass": "10d",
              "info": null
            },
            {
              "id": 593,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Ref." },
              "teacher": { "changed": false, "value": "Scg Scn" },
              "room": { "changed": false, "value": null },
              "schoolClass": "REF",
              "info": null
            },
            {
              "id": 626,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "ma1" },
              "teacher": { "changed": false, "value": "Scg Scn" },
              "room": { "changed": false, "value": "S1.13" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 626,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "ma1" },
              "teacher": { "changed": false, "value": "Scg Scn" },
              "room": { "changed": false, "value": "S1.13" },
              "schoolClass": "JG11",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Sch",
          "plannedLessons": [
            {
              "id": 731,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "MA2" },
              "teacher": { "changed": false, "value": "Sch" },
              "room": { "changed": false, "value": "S1.13" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 731,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "MA2" },
              "teacher": { "changed": false, "value": "Sch" },
              "room": { "changed": false, "value": "S1.13" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 343,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "GEO" },
              "teacher": { "changed": false, "value": "Sch" },
              "room": { "changed": false, "value": "E0.07" },
              "schoolClass": "9c",
              "info": null
            },
            {
              "id": 99,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Sch" },
              "room": { "changed": false, "value": "E0.08" },
              "schoolClass": "6b",
              "info": null
            },
            {
              "id": 452,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "Int" },
              "teacher": { "changed": false, "value": "Sch" },
              "room": { "changed": false, "value": "E0.08" },
              "schoolClass": "7c",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Scl",
          "plannedLessons": [
            {
              "id": 61,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "EN" },
              "teacher": { "changed": false, "value": "Scl" },
              "room": { "changed": false, "value": "E2.08" },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 61,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "EN" },
              "teacher": { "changed": false, "value": "Scl" },
              "room": { "changed": false, "value": "E2.08" },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 2,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "EN" },
              "teacher": { "changed": false, "value": "Scl" },
              "room": { "changed": false, "value": "E1.07" },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 379,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "EN" },
              "teacher": { "changed": false, "value": "Scl" },
              "room": { "changed": false, "value": "E2.14" },
              "schoolClass": "10b",
              "info": null
            },
            {
              "id": 454,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "ÖPR" },
              "teacher": { "changed": false, "value": "BoI Kra Scl" },
              "room": { "changed": false, "value": null },
              "schoolClass": "SOA",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Scn",
          "plannedLessons": [
            {
              "id": 248,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "SPw-8ac" },
              "teacher": { "changed": false, "value": "Göb Scn" },
              "room": { "changed": false, "value": "TH 1" },
              "schoolClass": "8a",
              "info": null
            },
            {
              "id": 248,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "SPw-8ac" },
              "teacher": { "changed": false, "value": "Göb Scn" },
              "room": { "changed": false, "value": "TH 1" },
              "schoolClass": "8c",
              "info": null
            },
            {
              "id": 248,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "SPw-8ac" },
              "teacher": { "changed": false, "value": "Göb Scn" },
              "room": { "changed": false, "value": "TH 1" },
              "schoolClass": "8a",
              "info": null
            },
            {
              "id": 248,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "SPw-8ac" },
              "teacher": { "changed": false, "value": "Göb Scn" },
              "room": { "changed": false, "value": "TH 1" },
              "schoolClass": "8c",
              "info": null
            },
            {
              "id": 425,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Scg Scn" },
              "room": { "changed": false, "value": "E1.14" },
              "schoolClass": "10d",
              "info": null
            },
            {
              "id": 593,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Ref." },
              "teacher": { "changed": false, "value": "Scg Scn" },
              "room": { "changed": false, "value": null },
              "schoolClass": "REF",
              "info": null
            },
            {
              "id": 626,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "ma1" },
              "teacher": { "changed": false, "value": "Scg Scn" },
              "room": { "changed": false, "value": "S1.13" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 626,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "ma1" },
              "teacher": { "changed": false, "value": "Scg Scn" },
              "room": { "changed": false, "value": "S1.13" },
              "schoolClass": "JG11",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Scö",
          "plannedLessons": [
            {
              "id": 92,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "MU" },
              "teacher": { "changed": false, "value": "Scö" },
              "room": { "changed": false, "value": "S2.17" },
              "schoolClass": "6a",
              "info": null
            },
            {
              "id": 615,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "choJ" },
              "teacher": { "changed": false, "value": "CHLJ Scö" },
              "room": { "changed": false, "value": null },
              "schoolClass": "8a",
              "info": null
            },
            {
              "id": 615,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "choJ" },
              "teacher": { "changed": false, "value": "CHLJ Scö" },
              "room": { "changed": false, "value": null },
              "schoolClass": "9a",
              "info": null
            },
            {
              "id": 615,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "choJ" },
              "teacher": { "changed": false, "value": "CHLJ Scö" },
              "room": { "changed": false, "value": null },
              "schoolClass": "10a",
              "info": null
            },
            {
              "id": 615,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "choJ" },
              "teacher": { "changed": false, "value": "CHLJ Scö" },
              "room": { "changed": false, "value": null },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 615,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "choJ" },
              "teacher": { "changed": false, "value": "CHLJ Scö" },
              "room": { "changed": false, "value": null },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 615,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "choJ" },
              "teacher": { "changed": false, "value": "CHLJ Scö" },
              "room": { "changed": false, "value": null },
              "schoolClass": "8a",
              "info": null
            },
            {
              "id": 615,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "choJ" },
              "teacher": { "changed": false, "value": "CHLJ Scö" },
              "room": { "changed": false, "value": null },
              "schoolClass": "9a",
              "info": null
            },
            {
              "id": 615,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "choJ" },
              "teacher": { "changed": false, "value": "CHLJ Scö" },
              "room": { "changed": false, "value": null },
              "schoolClass": "10a",
              "info": null
            },
            {
              "id": 615,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "choJ" },
              "teacher": { "changed": false, "value": "CHLJ Scö" },
              "room": { "changed": false, "value": null },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 615,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "choJ" },
              "teacher": { "changed": false, "value": "CHLJ Scö" },
              "room": { "changed": false, "value": null },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 829,
              "order": 9,
              "startTime": "2024-09-02T13:10:00.000Z",
              "endTime": "2024-09-02T13:55:00.000Z",
              "subject": { "changed": false, "value": "Stibi" },
              "teacher": { "changed": false, "value": "Scö" },
              "room": { "changed": false, "value": null },
              "schoolClass": "12 St",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Sei",
          "plannedLessons": [
            {
              "id": 782,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "en3" },
              "teacher": { "changed": false, "value": "Sei" },
              "room": { "changed": false, "value": "E2.15" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 782,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "en3" },
              "teacher": { "changed": false, "value": "Sei" },
              "room": { "changed": false, "value": "E2.15" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 117,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "RU-7ab" },
              "teacher": { "changed": false, "value": "Sei" },
              "room": { "changed": false, "value": "E2.08" },
              "schoolClass": "7a",
              "info": null
            },
            {
              "id": 117,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "RU-7ab" },
              "teacher": { "changed": false, "value": "Sei" },
              "room": { "changed": false, "value": "E2.08" },
              "schoolClass": "7b",
              "info": null
            },
            {
              "id": 334,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": true, "value": "EN" },
              "teacher": { "changed": true, "value": "Sei" },
              "room": { "changed": true, "value": "E2.09" },
              "schoolClass": "9c",
              "info": "statt Mi (04.09.) St.6, Raum geändert; INF Frau Schuppan fällt aus"
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Shr",
          "plannedLessons": [
            {
              "id": 585,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "ÖPR" },
              "teacher": { "changed": false, "value": "Pol Shr Mic" },
              "room": { "changed": false, "value": null },
              "schoolClass": "SOA",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Ste",
          "plannedLessons": [
            {
              "id": 631,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "fr1" },
              "teacher": { "changed": false, "value": "Ste" },
              "room": { "changed": false, "value": "E1.13" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 293,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "RU-st9" },
              "teacher": { "changed": false, "value": "Ste" },
              "room": { "changed": false, "value": "E1.13" },
              "schoolClass": "9a",
              "info": null
            },
            {
              "id": 293,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "RU-st9" },
              "teacher": { "changed": false, "value": "Ste" },
              "room": { "changed": false, "value": "E1.13" },
              "schoolClass": "9b",
              "info": null
            },
            {
              "id": 293,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "RU-st9" },
              "teacher": { "changed": false, "value": "Ste" },
              "room": { "changed": false, "value": "E1.13" },
              "schoolClass": "9c",
              "info": null
            },
            {
              "id": 135,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "FR-7b-7e" },
              "teacher": { "changed": false, "value": "Ste" },
              "room": { "changed": false, "value": "E1.13" },
              "schoolClass": "7b",
              "info": null
            },
            {
              "id": 135,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "FR-7b-7e" },
              "teacher": { "changed": false, "value": "Ste" },
              "room": { "changed": false, "value": "E1.13" },
              "schoolClass": "7e",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Süm",
          "plannedLessons": [
            {
              "id": 305,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "KU" },
              "teacher": { "changed": false, "value": "Süm" },
              "room": { "changed": false, "value": "M1.08" },
              "schoolClass": "9a",
              "info": null
            },
            {
              "id": 129,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": true, "value": "KU" },
              "teacher": { "changed": true, "value": "Süm" },
              "room": { "changed": true, "value": "M1.05" },
              "schoolClass": "7a",
              "info": "verlegt von St.7, Raum geändert; GE Frau Kiermeyer gehalten am Fr (30.08.) St.2, Raum geändert"
            },
            {
              "id": 348,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "KU" },
              "teacher": { "changed": false, "value": "Süm" },
              "room": { "changed": false, "value": "M1.08" },
              "schoolClass": "9c",
              "info": null
            },
            {
              "id": 445,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "FlIn" },
              "teacher": { "changed": false, "value": "Süm" },
              "room": { "changed": false, "value": "E1.08" },
              "schoolClass": "6a",
              "info": null
            },
            {
              "id": 445,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "FlIn" },
              "teacher": { "changed": false, "value": "Süm" },
              "room": { "changed": false, "value": "E1.08" },
              "schoolClass": "6b",
              "info": null
            },
            {
              "id": 445,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "FlIn" },
              "teacher": { "changed": false, "value": "Süm" },
              "room": { "changed": false, "value": "E1.08" },
              "schoolClass": "6a",
              "info": null
            },
            {
              "id": 445,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "FlIn" },
              "teacher": { "changed": false, "value": "Süm" },
              "room": { "changed": false, "value": "E1.08" },
              "schoolClass": "6b",
              "info": null
            },
            {
              "id": 160,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "Süm" },
              "room": { "changed": false, "value": "M1.05" },
              "schoolClass": "7c",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "The",
          "plannedLessons": [
            {
              "id": 484,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "FlIn" },
              "teacher": { "changed": false, "value": "The" },
              "room": { "changed": false, "value": "E0.13" },
              "schoolClass": "6a",
              "info": null
            },
            {
              "id": 484,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "FlIn" },
              "teacher": { "changed": false, "value": "The" },
              "room": { "changed": false, "value": "E0.13" },
              "schoolClass": "6b",
              "info": null
            },
            {
              "id": 484,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "FlIn" },
              "teacher": { "changed": false, "value": "The" },
              "room": { "changed": false, "value": "E0.13" },
              "schoolClass": "6a",
              "info": null
            },
            {
              "id": 484,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "FlIn" },
              "teacher": { "changed": false, "value": "The" },
              "room": { "changed": false, "value": "E0.13" },
              "schoolClass": "6b",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Thi",
          "plannedLessons": [
            {
              "id": 121,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "PH" },
              "teacher": { "changed": false, "value": "Thi" },
              "room": { "changed": false, "value": "E1.19" },
              "schoolClass": "7a",
              "info": null
            },
            {
              "id": 137,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Thi" },
              "room": { "changed": false, "value": "E1.14" },
              "schoolClass": "7b",
              "info": null
            },
            {
              "id": 274,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Thi" },
              "room": { "changed": false, "value": "E2.07" },
              "schoolClass": "8c",
              "info": null
            },
            {
              "id": 627,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "ma2" },
              "teacher": { "changed": false, "value": "Thi" },
              "room": { "changed": false, "value": "S1.14" },
              "schoolClass": "JG11",
              "info": null
            },
            {
              "id": 627,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "ma2" },
              "teacher": { "changed": false, "value": "Thi" },
              "room": { "changed": false, "value": "S1.14" },
              "schoolClass": "JG11",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Vet",
          "plannedLessons": [
            {
              "id": 378,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "Vet" },
              "room": { "changed": false, "value": "E1.09" },
              "schoolClass": "10b",
              "info": null
            },
            {
              "id": 378,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "Vet" },
              "room": { "changed": false, "value": "E1.09" },
              "schoolClass": "10b",
              "info": null
            },
            {
              "id": 294,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Vet" },
              "room": { "changed": false, "value": "E1.09" },
              "schoolClass": "9a",
              "info": null
            },
            {
              "id": 444,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "FlIn" },
              "teacher": { "changed": false, "value": "Vet" },
              "room": { "changed": false, "value": "E1.09" },
              "schoolClass": "6a",
              "info": null
            },
            {
              "id": 444,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "FlIn" },
              "teacher": { "changed": false, "value": "Vet" },
              "room": { "changed": false, "value": "E1.09" },
              "schoolClass": "6b",
              "info": null
            },
            {
              "id": 444,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "FlIn" },
              "teacher": { "changed": false, "value": "Vet" },
              "room": { "changed": false, "value": "E1.09" },
              "schoolClass": "6a",
              "info": null
            },
            {
              "id": 444,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "FlIn" },
              "teacher": { "changed": false, "value": "Vet" },
              "room": { "changed": false, "value": "E1.09" },
              "schoolClass": "6b",
              "info": null
            },
            {
              "id": 354,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "Vet" },
              "room": { "changed": false, "value": "E0.14" },
              "schoolClass": "10a",
              "info": null
            },
            {
              "id": 723,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "AG S" },
              "teacher": { "changed": false, "value": "Vet" },
              "room": { "changed": false, "value": "E1.15" },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 723,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "AG S" },
              "teacher": { "changed": false, "value": "Vet" },
              "room": { "changed": false, "value": "E1.15" },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 723,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "AG S" },
              "teacher": { "changed": false, "value": "Vet" },
              "room": { "changed": false, "value": "E1.15" },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 723,
              "order": 7,
              "startTime": "2024-09-02T11:25:00.000Z",
              "endTime": "2024-09-02T12:10:00.000Z",
              "subject": { "changed": false, "value": "AG S" },
              "teacher": { "changed": false, "value": "Vet" },
              "room": { "changed": false, "value": "E1.15" },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 723,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "AG S" },
              "teacher": { "changed": false, "value": "Vet" },
              "room": { "changed": false, "value": "E1.15" },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 723,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "AG S" },
              "teacher": { "changed": false, "value": "Vet" },
              "room": { "changed": false, "value": "E1.15" },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 723,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "AG S" },
              "teacher": { "changed": false, "value": "Vet" },
              "room": { "changed": false, "value": "E1.15" },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 723,
              "order": 8,
              "startTime": "2024-09-02T12:15:00.000Z",
              "endTime": "2024-09-02T13:00:00.000Z",
              "subject": { "changed": false, "value": "AG S" },
              "teacher": { "changed": false, "value": "Vet" },
              "room": { "changed": false, "value": "E1.15" },
              "schoolClass": "5d",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Völk",
          "plannedLessons": [
            {
              "id": 472,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Völk" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 472,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Völk" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 472,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Völk" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 472,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Völk" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 472,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Völk" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 472,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Völk" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 472,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Völk" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 472,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Völk" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5d",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Wil",
          "plannedLessons": [
            {
              "id": 96,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "EN" },
              "teacher": { "changed": false, "value": "Wil" },
              "room": { "changed": false, "value": "E0.08" },
              "schoolClass": "6b",
              "info": null
            },
            {
              "id": 49,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "Wil" },
              "room": { "changed": false, "value": "E2.07" },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 421,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "Wil" },
              "room": { "changed": false, "value": "E1.12" },
              "schoolClass": "10d",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Zac",
          "plannedLessons": [
            {
              "id": 794,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Zac" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 794,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Zac" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 794,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Zac" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 794,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Zac" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 794,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Zac" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 794,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Zac" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 794,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Zac" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 794,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "KuLe" },
              "teacher": { "changed": false, "value": "Zac" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5d",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Zin",
          "plannedLessons": [
            {
              "id": 783,
              "order": 1,
              "startTime": "2024-09-02T05:30:00.000Z",
              "endTime": "2024-09-02T06:15:00.000Z",
              "subject": { "changed": false, "value": "eth1" },
              "teacher": { "changed": false, "value": "Zin" },
              "room": { "changed": false, "value": "E0.09" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 783,
              "order": 2,
              "startTime": "2024-09-02T06:20:00.000Z",
              "endTime": "2024-09-02T07:05:00.000Z",
              "subject": { "changed": false, "value": "eth1" },
              "teacher": { "changed": false, "value": "Zin" },
              "room": { "changed": false, "value": "E0.09" },
              "schoolClass": "JG12",
              "info": null
            },
            {
              "id": 95,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "DE" },
              "teacher": { "changed": false, "value": "Zin" },
              "room": { "changed": false, "value": "E0.08" },
              "schoolClass": "6b",
              "info": null
            },
            {
              "id": 304,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "ETH-9ac" },
              "teacher": { "changed": false, "value": "Zin" },
              "room": { "changed": false, "value": "E0.09" },
              "schoolClass": "9a",
              "info": null
            },
            {
              "id": 304,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "ETH-9ac" },
              "teacher": { "changed": false, "value": "Zin" },
              "room": { "changed": false, "value": "E0.09" },
              "schoolClass": "9c",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Zsc",
          "plannedLessons": [
            {
              "id": 586,
              "order": 3,
              "startTime": "2024-09-02T07:25:00.000Z",
              "endTime": "2024-09-02T08:10:00.000Z",
              "subject": { "changed": false, "value": "Ref." },
              "teacher": { "changed": false, "value": "Das Zsc" },
              "room": { "changed": false, "value": null },
              "schoolClass": "REF",
              "info": null
            },
            {
              "id": 254,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "MA" },
              "teacher": { "changed": false, "value": "Dom Zsc" },
              "room": { "changed": false, "value": "E2.08" },
              "schoolClass": "8b",
              "info": null
            },
            {
              "id": 587,
              "order": 6,
              "startTime": "2024-09-02T10:35:00.000Z",
              "endTime": "2024-09-02T11:20:00.000Z",
              "subject": { "changed": false, "value": "Ref." },
              "teacher": { "changed": false, "value": "Dom Zsc" },
              "room": { "changed": false, "value": null },
              "schoolClass": "REF",
              "info": null
            }
          ],
          "type": "teacher"
        },
        {
          "name": "Züc",
          "plannedLessons": [
            {
              "id": 473,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Züc" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 473,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Züc" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 473,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Züc" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 473,
              "order": 4,
              "startTime": "2024-09-02T08:20:00.000Z",
              "endTime": "2024-09-02T09:05:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Züc" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5d",
              "info": null
            },
            {
              "id": 473,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Züc" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5a",
              "info": null
            },
            {
              "id": 473,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Züc" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5b",
              "info": null
            },
            {
              "id": 473,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Züc" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5c",
              "info": null
            },
            {
              "id": 473,
              "order": 5,
              "startTime": "2024-09-02T09:15:00.000Z",
              "endTime": "2024-09-02T10:00:00.000Z",
              "subject": { "changed": false, "value": "Kult" },
              "teacher": { "changed": false, "value": "Züc" },
              "room": { "changed": false, "value": null },
              "schoolClass": "5d",
              "info": null
            }
          ],
          "type": "teacher"
        }
      ]
    }`);
	} catch (err) {
		console.error(err);
		if (err instanceof PlanNotFoundError) {
			error(404, 'No plan found for this date');
		} else if (err instanceof RequestFailedError) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			const status: NumericRange<400, 599> =
				err.getStatus() > 399 && err.getStatus() < 600 ? err.getStatus() : 500;
			error(status, err.getStatusText());
		} else {
			const e = err as Error;
			error(500, e.message);
		}
	}
};
