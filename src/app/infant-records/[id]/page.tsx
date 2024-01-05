import React from 'react';
import { ViewBirthRecord } from '~/lib/components/PageComponents/ViewBirthRecord';
import { IPageProps } from '~/lib/components/Schemas';
import { withPageAuth } from '~/lib/components/Utils/withPageAuth';
import { HealthService, UserService } from '~/services';

async function getData(id: string, search: any) {
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
    const vaccines = await HealthService.getApiHealthVaccines();
    const allInfants = await UserService.getApiUserInfants({ search });
    const allTeams = await UserService.getApiUserListUsers({});
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
        vaccines: vaccines.data,
      };
    }
    return {
      userRecord: {},
      medicals: [],
      growths: [],
      immunization: [],
      allInfants: [],
      allTeams: [],
      vaccines: [],
    };
  } catch (error) {
    console.log({ error });
  }
}
const page = withPageAuth(async ({ searchParams, params }: IPageProps) => {
  const { id } = params;
  const { search } = searchParams;
  const data = await getData(id, search);
  return <ViewBirthRecord records={data} id={id} />;
});

export default page;
