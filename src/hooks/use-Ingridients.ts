
import { Api } from '@/services/api-client';
import { Ingridient } from '@prisma/client';

import React from 'react';

export const useIngridients = () => {
  const [ingridients, setIngridients] = React.useState<Ingridient[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchIngridients() {
      try {
        setLoading(true);
        const ingridients = await Api.ingridients.getAll();
        setIngridients(ingridients);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchIngridients();
  }, []);

  return {
    ingridients,
    loading,
  };
};
