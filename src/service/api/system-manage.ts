import { toast } from 'vue-sonner'
import { request } from '../request'

function adapter(obj: {
  result: {
    resultCode: string
    resultMessage: string
  }
  data: object
}) {
  if (obj.result.resultCode === '000000') {
    return obj.data
  } else {
    toast.error('Event has not been created')
    console.log(obj)
  }
}

/**
 * 1. get all roles
 *
 * these roles are all enabled
 */
export function fetchGetAllRoles(params?: any) {
  return request
    .get('/systemManage/getAllRoles', { params })
    .then((res) => adapter(res as any))
}
