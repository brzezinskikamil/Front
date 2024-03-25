import React from "react";
import { BreadCrumbs } from "@escolalms/components/lib/components/atoms/BreadCrumbs/BreadCrumbs";
import styled from "styled-components";
import MobileGuard from "@/components/_App/MobileGuard";

type Props = {
  items: React.ReactNode[];
};

const StyledBreadcrumbs = styled.div`
  margin-bottom: 36px;
  p {
    color: ${({ theme }) =>
      theme.mode === "dark" ? theme.gray5 : theme.gray2}!important;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) =>
      theme.mode === "dark" ? theme.gray5 : theme.gray2}!important;
  }
`;

const Breadcrumbs: React.FC<Props> = ({ items }) => {
  return (
    <StyledBreadcrumbs>
      <MobileGuard>
        <BreadCrumbs items={items} />
      </MobileGuard>
    </StyledBreadcrumbs>
  );
};

export default Breadcrumbs;
