import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import Layout from "@/components/_App/Layout";
import { ResetPasswordForm } from "@escolalms/components/lib/components/organisms/ResetPasswordForm/ResetPasswordForm";
import { isMobile } from "react-device-detect";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { Col, Row } from "react-grid-system";
import Container from "@/components/Common/Container";
import routeRoutes from "@/components/Routes/routes";
import AuthWrapper from "@/components/Authentication/AuthWrapper";

const ResetPassword: React.FC = () => {
  const { push } = useHistory();
  const { search } = useLocation();
  const email = search && search.split("&")[0].split("=")[1];
  const token = search && search.split("&")[1].split("=")[1];
  const { t } = useTranslation();

  React.useEffect(() => {
    !token && push(routeRoutes.home);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <AuthWrapper>
        <Container>
          <Row justify={"center"}>
            <Col md={12} lg={12}>
              <ResetPasswordForm
                onSecondStepSuccess={() => {
                  push(routeRoutes.login);
                  toast.success(t<string>("LoginPage.ForgotSuccessStep2"));
                }}
                secondStep
                mobile={isMobile}
                return_url="#/reset-password"
                token={token}
                email={email}
              />
            </Col>
          </Row>
        </Container>
      </AuthWrapper>
    </Layout>
  );
};

export default ResetPassword;
