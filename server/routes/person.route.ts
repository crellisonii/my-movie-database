import { NextFunction, Request, Response, Router } from 'express';

export const router = Router();

router.get('/:personId', (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.personId;
  res.status(200).json({
    message: 'person/details',
    id
  });
});

router.get('/:personId/movie_credits', (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.personId;
  res.status(200).json({
    message: 'person/movie_credits',
    id
  });
});

router.get('/:personId/tv_credits', (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.personId;
  res.status(200).json({
    message: 'person/tv_credits',
    id
  });
});

router.get('/:personId/combined_credits', (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.personId;
  res.status(200).json({
    message: 'person/combined_credits',
    id
  });
});

router.get('/:personId/external_ids', (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.personId;
  res.status(200).json({
    message: 'person/external_ids',
    id
  });
});

router.get('/:personId/images', (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.personId;
  res.status(200).json({
    message: 'person/images',
    id
  });
});

router.get('/:personId/tagged_images', (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.personId;
  res.status(200).json({
    message: 'person/tagged_images',
    id
  });
});
