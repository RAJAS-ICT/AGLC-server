import express from 'express'
import {getJournalEntry, getJournalEntryById, createJournalEntry, updateJournalEntry} from '../controller/journalEntryController.js'
import middleware from '../middleware/authMiddleware.js'

const router = express.Router()

router.get('/', middleware, getJournalEntry)
router.get('/:id', middleware, getJournalEntryById)
router.post('/', middleware, createJournalEntry)
router.put('/',middleware, updateJournalEntry)


export default router