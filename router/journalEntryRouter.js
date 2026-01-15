import express from 'express'
import {getJournalEntry, getJournalEntryById, createJournalEntry, updateJournalEntry} from '../controller/journalEntryController.js'
const router = express.Router()

router.get('/', getJournalEntry)
router.get('/:id', getJournalEntryById)
router.post('/', createJournalEntry)
router.put('/', updateJournalEntry)


export default router