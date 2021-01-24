import { Router } from 'express';
import Group from '../persistence/models/groups'

const router = Router();

router.post('/', (req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const restaurantIds = req.body.restaurantIds;

    const newGroup = new Group({name, description, restaurantIds})
    newGroup.save()
        .then(() => res.json({
            'id': newGroup._id
        }))
        .catch(err => res.status(400).json('Error: ' + err))
})


export default router;
