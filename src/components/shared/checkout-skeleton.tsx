import * as React from 'react';
import { Skeleton } from '../ui/skeleton';



export const CheckoutSkeleton: React.FC = () => {
    return (
       <div className='flex flex-col gap-5'>
                                  <div className="flex items-center justify-between space-x-4">
                                       <Skeleton className="h-12 w-12 rounded-full" />
                                       <div className="space-y-2">
                                         <Skeleton className="h-4 w-[350px]" />
                                         <Skeleton className="h-4 w-[200px]" />
                                    </div>
                                     <div className="space-y-2">
                                         <Skeleton className="h-8 w-[50px]" />
                                    </div>
                                    <div className="space-y-2">
                                         <Skeleton className="h-8 w-[150px]" />
                                       </div>
                                    </div>
                                      <div className="flex items-center justify-between space-x-4">
                                       <Skeleton className="h-12 w-12 rounded-full" />
                                       <div className="space-y-2">
                                         <Skeleton className="h-4 w-[350px]" />
                                         <Skeleton className="h-4 w-[200px]" />
                                    </div>
                                     <div className="space-y-2">
                                         <Skeleton className="h-8 w-[50px]" />
                                    </div>
                                    <div className="space-y-2">
                                         <Skeleton className="h-8 w-[150px]" />
                                       </div>
                                     </div>
                                </div>
  ) ;
};


