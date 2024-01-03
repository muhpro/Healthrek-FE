import React from 'react';
import { ViewBirthRecord } from '~/lib/components/PageComponents/ViewBirthRecord';
import { withPageAuth } from '~/lib/components/Utils/withPageAuth';
import { HealthService, UserService } from '~/services';

async function getData(id: string) {
  try {
    const result = await UserService.getApiUserInfants1({ id });
    const medicals = await HealthService.getApiHealthConsultationMedicalHistory(
      {
        infantId: id,
      }
    );
    const growths = await HealthService.getApiHealthGrowthInfantGrowthRecord({
      infantId: id,
    });
    const immunization = await HealthService.getApiHealthImmunization({
      infantId: id,
    });
    const allInfants = await UserService.getApiUserInfants();
    const allTeams = await UserService.getApiUserListUsers();
    if (
      result.success &&
      medicals.success &&
      growths.success &&
      immunization.success
    ) {
      return {
        userRecord: result.data,
        medicals: medicals.data,
        growths: growths.data,
        immunization: immunization.data,
        allInfants: allInfants.data,
        allTeams: allTeams.data,
      };
    }
    return {
      userRecord: {},
      medicals: [],
      growths: [],
      immunization: [],
      allInfants: [],
      allTeams: [],
    };
  } catch (error) {
    console.log({ error });
  }
}
const page = withPageAuth(async ({ params }: any) => {
  const { id } = params;
  const data = await getData(id);
  return <ViewBirthRecord records={data} id={id} />;
});

export default page;
